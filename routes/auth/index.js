const loginRouter = require('./loginRouter');
const logoutRouter = require("./logoutRouter");
const registerRouter = require('./registerRouter');
const getCurrentUserRouter = require('./getCurrentUserRouter')

module.exports = {
  loginRouter,
  logoutRouter,
  registerRouter,
  getCurrentUserRouter,
};
