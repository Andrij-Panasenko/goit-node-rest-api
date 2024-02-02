const express = require("express");
const { logoutUser } = require("../../controllers/userControllers");
const { authenticate } = require("../../middlewears");

const logoutRouter = express.Router();

logoutRouter.post("/", authenticate, logoutUser);

module.exports = logoutRouter;
