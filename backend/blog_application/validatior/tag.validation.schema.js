const Joi = require("joi");

const tagSchema=Joi.object({
   blogId: Joi.number().integer().positive().required().messages({
       "number.base": "Blog ID must be a number",
       "number.integer": "Blog ID must be an integer",
       "number.positive": "Blog ID must be a positive number",
       "any.required": "Blog ID is required",
     }),

  name: Joi.string().min(5).required().messages({
    "string.base": "Content must be a string",
    "string.empty": "Content is required",
    "string.min": "Content must be at least 5 characters",
    "any.required": "Content is required",
  }),
})

module.exports = {
    tagSchema 
};