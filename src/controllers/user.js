const jwt = require('jsonwebtoken');
const User = require('../services/user');
require('dotenv').config();

const createUserController = async (req, res) => {
  try {
    const data = await User.createUser(req.body);
    if (data.message) return res.status(409).json({ message: data.message });
    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    const token = jwt.sign({ data }, process.env.JWT_SECRET, jwtConfig);
    res.status(201).json({ token });
  } catch (e) {
    console.log(e);
  }
};

const listAllUsers = async (_req, res) => {
  try {
    const data = await User.getAllUsers();
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};

const listUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await User.getUserById(id);
    if (!data) return res.status(404).json({ message: 'User does not exist' });
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createUserController,
  listAllUsers,
  listUserById,
};
