const jwt = require('jsonwebtoken');
const User = require('../services/login');
// require('dotenv').config();

const loginController = async (req, res) => {
  console.log(req.body);
  try {
    const data = await User.login(req.body);
    if (data.message) return data.message;
    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data }, process.env.JWT_SECRET, jwtConfig);
    res.status(201).json(token);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  loginController,
};