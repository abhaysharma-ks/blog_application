const Comment = require("../models/commentModel");

// ADD COMMENT
const createCommentService = async ({ content, blogId, userId, parentId }) => {
  const comment = await Comment.create({
    content,
    blogId,
    userId,
    parentId: parentId || null,
  });

  return comment;
};

// GET COMMENTS BY BLOG
const getCommentsByBlogService = async (blogId) => {
  const comments = await Comment.findAll({
    where: { blogId },
    order: [["createdAt", "DESC"]],
  });

  return comments;
};

module.exports = {
  createCommentService,
  getCommentsByBlogService,
};