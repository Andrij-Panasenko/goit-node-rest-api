const express = require("express");
const validateBody = require("../helpers/validateBody");
const validateSchema = require("../schemas/usersSchemas");
const { registerUser, loginUser, logoutUser, getCurrentUser } = require("../controllers/userControllers");
const { authenticate } = require("../middlewears");

const userRouter = express.Router();

userRouter.post(
  "/register",
  validateBody(validateSchema.registerSchema),
  registerUser
);

userRouter.post("/login", validateBody(validateSchema.loginSchema), loginUser);

userRouter.post("/logout", authenticate, logoutUser);

userRouter.get("/current", authenticate, getCurrentUser);

module.exports = userRouter;
