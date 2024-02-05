const bcrypt = require("bcrypt");
const Users = require("../../models/users");
const HttpError = require("../../helpers/HttpError");


const registerUser = async (req, res, next) => {
  const { email, password } = req.body;
  const hashedPsw = await bcrypt.hash(password, 10);
  
  try {
    const result = await Users.create({ email, password: hashedPsw });
    res.status(201).json({id: result._id, email});
  } catch (error) {
    if (error.message.includes("E11000")) {
      next(HttpError(409, "Not valid email"));
    }
  }
};

module.exports = registerUser;
