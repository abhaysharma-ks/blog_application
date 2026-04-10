const Joi = require("joi");

const commentSchema = Joi.object({
  content: Joi.string().min(2).max(100).trim().required().messages({
    "string.base": "Content must be a string",
    "string.empty": "Content is required",
    "string.min": "Content must be at least 2 characters",
    "string.max": "Content must not exceed 100 characters",
    "any.required": "Content is required",
  }),

  blogId: Joi.number().integer().positive().required().messages({
    "number.base": "Blog ID must be a number",
    "number.integer": "Blog ID must be an integer",
    "number.positive": "Blog ID must be a positive number",
    "any.required": "Blog ID is required",
  }),
});

const getCommentSchema = Joi.object({
  blogId: Joi.number().integer().positive().required().messages({
    "number.base": "Blog ID must be a number",
    "number.integer": "Blog ID must be an integer",
    "number.positive": "Blog ID must be a positive number",
    "any.required": "Blog ID is required",
  }),
});
module.exports = {
  commentSchema,
  getCommentSchema,
};
