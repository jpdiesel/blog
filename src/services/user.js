const { User } = require('../../models');

const createUser = async (body) => {
  const user = await User.findOne({ where: { email: body.email } });
  if (user) return { message: 'User already registered' };
  const userCreated = await User.create(body);
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

const deleteUser = async (id) => {
   await User.destroy({ where: { id } });
};

module.exports = { createUser, getAllUsers, getUserById, deleteUser };
