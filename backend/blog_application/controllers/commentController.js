const commentService = require("../services/commentService");

// ADD COMMENT
const addComment = async (req, res) => {
  try {
    const comment = await commentService.createCommentService({
      ...req.body,
      userId: req.user.id,
    });

    return res.status(201).json(comment);
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

// GET COMMENTS
const getComments = async (req, res) => {
  try {
    const comments = await commentService.getCommentsByBlogService(
      req.params.blogId,
    );

    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  addComment,
  getComments,
};
