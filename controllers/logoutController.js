const HttpError = require("../helpers/HttpError");
const User = require("../models/users");

const logOut = async (req, res, next) => {
  const { id } = req.body;

  try {
    const user = await User.findById(id);
    if (!user || user.token === "") next(HttpError(401));

    await User.findByIdAndUpdate(user._id, { token: "" });

    res.status(204).json();
  } catch (error) {
    next(HttpError(401));
  }
};

module.exports = logOut;

