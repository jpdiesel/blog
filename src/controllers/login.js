const jwt = require('jsonwebtoken');
const User = require('../services/login');
require('dotenv').config();

const loginController = async (req, res) => {
  try {
    const data = await User.login(req.body);
    if (data.message) return res.status(400).json({ message: data.message });
    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data }, process.env.JWT_SECRET, jwtConfig);
    res.status(200).json({ token });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  loginController,
};