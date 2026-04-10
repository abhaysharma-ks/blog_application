const Blog = require("../models/blogModel");
const client = require("../config/redis");

// CREATE BLOG
const createBlog = async ({ title, content, userId }) => {
  const blog = await Blog.create({
    title,
    content,
    userId,
  });

  return blog;
};

// APPROVE BLOG
const approveBlogService = async (id) => {
  const blog = await Blog.findByPk(id);

  if (!blog) {
    const err = new Error("Blog not found");
    err.statusCode = 404;
    throw err;
  }

  blog.status = "approved";
  await blog.save();

  await client.del("approved_blogs");

  return true;
};

// GET SINGLE BLOG
const getBlogById = async (id) => {
  const blog = await Blog.findByPk(id);

  if (!blog) {
    const err = new Error("Blog not found");
    err.statusCode = 404;
    throw err;
  }

  return blog;
};

// GET APPROVED BLOGS (WITH CACHE)
const getApprovedBlogsService = async () => {
  const cached = await client.get("approved_blogs");

  if (cached) {
    return JSON.parse(cached);
  }

  const blogs = await Blog.findAll({
    where: { status: "approved" },
  });

  await client.set("approved_blogs", JSON.stringify(blogs), "EX", 3600);

  return blogs;
};

// GET PENDING BLOGS
const getPendingBlogsService = async () => {
  return await Blog.findAll({
    where: { status: "pending" },
  });
};

// EDIT BLOG
const editBlogService = async ({ id, title, content, userId }) => {
  const blog = await Blog.findByPk(id);

  if (!blog) {
    const err = new Error("Blog not found");
    err.statusCode = 404;
    throw err;
  }

  if (blog.userId !== userId) {
    const err = new Error("You can only edit your own blog");
    err.statusCode = 403;
    throw err;
  }

  if (blog.status === "approved") {
    const err = new Error("Approved blog cannot be edited");
    err.statusCode = 400;
    throw err;
  }

  if (title) blog.title = title;
  if (content) blog.content = content;

  await blog.save();

  await client.del("approved_blogs");

  return blog;
};

// DELETE BLOG
const deleteBlogService = async ({ id, userId }) => {
  const blog = await Blog.findByPk(id);

  if (!blog) {
    const err = new Error("Blog not found");
    err.statusCode = 404;
    throw err;
  }

  if (blog.userId !== userId) {
    const err = new Error("You can only delete your own blog");
    err.statusCode = 403;
    throw err;
  }

  await blog.destroy();
  await client.del("approved_blogs");

  return true;
};

// USER BLOGS
const getUserBlogsService = async (userId) => {
  return await Blog.findAll({
    where: { userId },
  });
};

module.exports = {
  createBlog,
  approveBlogService,
  getBlogById,
  getApprovedBlogsService,
  getPendingBlogsService,
  editBlogService,
  deleteBlogService,
  getUserBlogsService,
};