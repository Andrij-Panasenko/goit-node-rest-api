const joi = require("joi");

const createContactSchema = joi.object({
  name: joi.string().alphanum().min(2).max(30).required(),
  email: joi.string().email().required(),
  phone: joi.string().min(6).max(15),
});

const updateContactSchema = joi.object({
  name: joi.string().empty().alphanum().min(2).max(30),
  email: joi.string().empty().email().allow(),
  phone: joi.string().empty().min(6).max(15).allow(),
});

module.exports = {
  createContactSchema,
  updateContactSchema,
};
