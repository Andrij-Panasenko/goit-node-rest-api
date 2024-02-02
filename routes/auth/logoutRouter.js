const express = require('express');
const logOut = require('../../controllers/logoutController');
const { authenticate } = require("../../middlewears")

const logoutRouter = express.Router();

logoutRouter.post("/", authenticate, logOut);

module.exports = logoutRouter