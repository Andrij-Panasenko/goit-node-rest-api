const express = require("express");
const loginUser = require('../../controllers/loginController')

const loginRouter = express.Router();

loginRouter.post("/users/login", loginUser);

module.exports = loginRouter;