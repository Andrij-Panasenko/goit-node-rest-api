const joi = require("joi");

const registerSchema = joi.object({
  name: joi.string().min(2).max(15).required(),
  email: joi.string().email().max(50).required(),
  password: joi.string().min(6).max(18).required(),
});

const loginSchema = joi.object({
  email: joi.string().email().max(50).required(),
  password: joi.string().min(6).max(18).required(),
});

module.exports = {
    registerSchema,
    loginSchema,
}