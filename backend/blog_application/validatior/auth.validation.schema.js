const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().min(3).max(40).trim().required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name is required",
    "string.min": "Name must be at least 3 characters",
    "any.required": "Name is required",
  }),

  email: Joi.string().email().lowercase().trim().required().messages({
    "string.email": "Invalid email format",
    "string.empty": "Email is required",
    "any.required": "Email is required",
  }),

  password: Joi.string()
    .min(6)
    .max(20)
    .pattern(/^[a-zA-Z0-9@#$_-]+$/)
    .required()
    .messages({
      "string.min": "Password must be at least 6 characters",
      "string.max": "Password must not exceed 20 characters",
      "string.pattern.base": "Password contains invalid characters",
      "any.required": "Password is required",
    }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Enter a valid email",
    "any.required": "Email is required",
  }),

  password: Joi.string().required().messages({
    "any.required": "Password is required",
  }),
});

module.exports = {
  registerSchema,
  loginSchema,
};
