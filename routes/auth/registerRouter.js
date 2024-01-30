const express = require("express");
const createUser = require('../../controllers/registerController')

const registerRouter = express.Router();

registerRouter.post("/users/register", createUser);//registe

module.exports = registerRouter;