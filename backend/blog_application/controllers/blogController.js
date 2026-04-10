const blogService = require("../services/blogServices");

// CREATE
const generateBlog = async (req, res) => {
  try {
    const blog = await blogService.createBlog({
      ...req.body,
      userId: req.user.id,
    });

    return res.status(201).json({
      message: "Blog submitted for approval",
      blog,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

// APPROVE
const approveBlog = async (req, res) => {
  try {
    await blogService.approveBlogService(req.params.id);

    return res.status(200).json({
      message: "Blog approved",
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

// GET SINGLE BLOG
const blog = async (req, res) => {
  try {
    const data = await blogService.getBlogById(req.params.b_id);

    return res.status(200).json(data);
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

// GET APPROVED BLOGS
const getApprovedBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getApprovedBlogsService();

    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// GET PENDING
const getAllPendingBlogs = async (req, res) => {
  try {
    const blogs = await blogService.getPendingBlogsService();

    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// EDIT
const edit_blog = async (req, res) => {
  try {
    const blog = await blogService.editBlogService({
      id: req.params.id,
      userId: req.user.id,
      ...req.body,
    });

    return res.status(200).json({
      message: "Blog updated successfully",
      blog,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

// DELETE
const del_blog = async (req, res) => {
  try {
    await blogService.deleteBlogService({
      id: req.params.id,
      userId: req.user.id,
    });

    return res.status(200).json({
      message: "Blog deleted successfully",
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

// USER BLOGS
const userBlog = async (req, res) => {
  try {
    const blogs = await blogService.getUserBlogsService(req.user.id);

    return res.status(200).json(blogs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  generateBlog,
  approveBlog,
  blog,
  getApprovedBlogs,
  getAllPendingBlogs,
  edit_blog,
  del_blog,
  userBlog,
};