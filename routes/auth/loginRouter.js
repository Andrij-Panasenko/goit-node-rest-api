const express = require("express");
const loginUser = require('../../controllers/loginController');
const validationSchema = require('../../schemas/contactsSchemas');
const validateBody = require("../../helpers/validateBody");

const loginRouter = express.Router();

loginRouter.post("/", validateBody(validationSchema.loginSchema), loginUser);

module.exports = loginRouter;