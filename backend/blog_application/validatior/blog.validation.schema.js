const Joi = require("joi");

const blogSchema=Joi.object({
    title: Joi.string().min(5).max(100).trim().required().messages({
    "string.base": "Title must be a string",
    "string.empty": "Title is required",
    "string.min": "Title must be at least 5 characters",
    "string.max": "Title must not exceed 100 characters",
    "any.required": "Title is required",
  }),

  content: Joi.string().min(20).required().messages({
    "string.base": "Content must be a string",
    "string.empty": "Content is required",
    "string.min": "Content must be at least 20 characters",
    "any.required": "Content is required",
  }),
})

module.exports = {
    blogSchema 
};