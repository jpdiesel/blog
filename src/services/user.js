const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const user = await User.findOne({ where: { email } });
  if (user) return { message: 'User already registered' };
  const userCreated = await User.create(displayName, email, password, image);
  return userCreated;
};

const getAllUsers = async () => {
  const user = await User.findAll();
  return user;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id);
  return user;
};

module.exports = { createUser, getAllUsers, getUserById };
