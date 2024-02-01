const jwt = require("jsonwebtoken");
const HttpError = require("../helpers/HttpError");

const User = require("../models/users");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  if (!token) next(HttpError(401, "No token provided"));
  if (bearer !== "Bearer") next(HttpError(401, "Token type is not valid"));

  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user) throw HttpError(401);
    next();
  } catch (error) {
    if (
      error.name === "TokenExpiredError" ||
      error.name === "JsonWebTokenError"
    ) {
      next(HttpError(401, "JWT token is not valid")) 
    }
  }
};

module.exports = authenticate;
