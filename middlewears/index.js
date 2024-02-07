const isValidId = require("./isValidId");
const authenticate = require("./authenticate");
const upload = require('./multerConfig');
const resizeAvatar = require('./resizeAvatar')

module.exports = {
  isValidId,
  authenticate,
  upload,
  resizeAvatar,
};