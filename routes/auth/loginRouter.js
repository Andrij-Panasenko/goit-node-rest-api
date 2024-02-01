const express = require("express");
const loginUser = require('../../controllers/loginController')

const loginRouter = express.Router();

loginRouter.post("/", loginUser);

module.exports = loginRouter;