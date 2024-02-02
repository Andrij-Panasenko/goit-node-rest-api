const express = require("express");
const { registerUser } = require("../../controllers/userControllers");
const validateBody = require("../../helpers/validateBody");
const validateSchema = require("../../schemas/contactsSchemas");

const registerRouter = express.Router();

registerRouter.post(
  "/",
  validateBody(validateSchema.registerSchema),
  registerUser
);

module.exports = registerRouter;
