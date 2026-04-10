const tagService = require("../services/tagServices");

// CREATE TAG
const createTag = async (req, res) => {
  try {
    const tag = await tagService.createTagService(req.body);

    return res.status(201).json({
      message: "Tag added to blog",
      tag,
    });

  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

// GET TAGS
const getTags = async (req, res) => {
  try {
    const tags = await tagService.getTagsByBlogService(req.params.blogId);

    return res.status(200).json(tags);

  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTag,
  getTags,
};