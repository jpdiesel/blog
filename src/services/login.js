const { User } = require('../models');

const login = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });
  if (!user || user.password !== password) return { message: 'Invalid fields' };
  return user;
};

module.exports = {
  login,
};
