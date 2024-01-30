const User = require("../models/users");
const HttpError = require("../helpers/HttpError");
const controllerWrapper = require('../helpers/controllerWraper')
const bcrypt = require("bcrypt");

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) throw HttpError(401, "Wrong password or email");
  
  const isValidPsw = await bcrypt.compare(password, user.password);

  if (!isValidPsw) throw HttpError(401, "Wrong password or email");

  res.json({ token: "<>JWT TOKEN</>" });
};

module.exports = controllerWrapper(loginUser);
