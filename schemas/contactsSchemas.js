const joi = require("joi");

const createContactSchema = joi.object({
  name: joi.string().alphanum().min(2).max(15).required(),
  email: joi.string().email().max(50).required(),
  phone: joi.string().min(6).max(15).required(),
});

const updateContactSchema = joi.object({
  name: joi.string().alphanum().min(2).max(15),
  email: joi.string().email().max(50),
  phone: joi.string().min(6).max(15),
});

module.exports = {
  createContactSchema,
  updateContactSchema,
};
