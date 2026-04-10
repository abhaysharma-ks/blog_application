const Blog = require("../models/blogModel");
const Tag = require("../models/tagModel");

// CREATE TAG + ATTACH TO BLOG
const createTagService = async ({ blogId, name }) => {
  // normalize tag (important 🔥)
  const normalizedTag = name.trim().toLowerCase();

  const blog = await Blog.findByPk(blogId);

  if (!blog) {
    const err = new Error("Blog not found");
    err.statusCode = 404;
    throw err;
  }

  // find or create tag
  const [tag] = await Tag.findOrCreate({
    where: { name: normalizedTag },
  });

  // attach tag to blog
  await blog.addTag(tag);

  return tag;
};

// GET TAGS OF A BLOG
const getTagsByBlogService = async (blogId) => {
  const blog = await Blog.findByPk(blogId, {
    include: {
      model: Tag,
      attributes: ["id", "name"],
      through: { attributes: [] },
    },
  });

  if (!blog) {
    const err = new Error("Blog not found");
    err.statusCode = 404;
    throw err;
  }

  return blog.Tags;
};

module.exports = {
  createTagService,
  getTagsByBlogService,
};