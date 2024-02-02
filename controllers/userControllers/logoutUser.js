const HttpError = require("../../helpers/HttpError");
const controllerWrapper = require("../../helpers/controllerWraper");
const User = require("../../models/users");

const logoutUser = async (req, res, next) => {
  const { id } = req.body;

  
    const user = await User.findById(id);
    if (!user || user.token === "") next(HttpError(401));

    await User.findByIdAndUpdate(user._id, { token: "" });

    res.status(204).json();
  
    next(HttpError(401));

};

module.exports = controllerWrapper(logoutUser);
