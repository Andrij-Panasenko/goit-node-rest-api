const express = require("express");
const validateBody = require("../helpers/validateBody");
const validateSchema = require("../schemas/usersSchemas");
const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  uptadeAvatar,
} = require("../controllers/userControllers");
const { authenticate, upload } = require("../middlewears");

const userRouter = express.Router();

userRouter.post(
  "/register",
  validateBody(validateSchema.registerSchema),
  registerUser
);

userRouter.post("/login", validateBody(validateSchema.loginSchema), loginUser);

userRouter.post("/logout", authenticate, logoutUser);

userRouter.get("/current", authenticate, getCurrentUser);

userRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  uptadeAvatar
);

module.exports = userRouter;
