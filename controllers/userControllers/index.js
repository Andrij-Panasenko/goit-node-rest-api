const loginUser = require('./loginUser');
const logoutUser = require('./logoutUser');
const registerUser = require('./registerUser');
const getCurrentUser = require('./getCurrentUser');
const uptadeAvatar = require("./updateAvatar");
const verifyUserEmai = require('./verifyUserEmail')

module.exports = {
  loginUser,
  logoutUser,
  registerUser,
  getCurrentUser,
  uptadeAvatar,
  verifyUserEmai,
};