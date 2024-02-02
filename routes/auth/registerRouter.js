const express = require("express");
const createUser = require('../../controllers/registerController');
const validateBody = require("../../helpers/validateBody");
const validateSchema = require("../../schemas/contactsSchemas")

const registerRouter = express.Router();

registerRouter.post("/", validateBody(validateSchema.registerSchema), createUser);

module.exports = registerRouter;