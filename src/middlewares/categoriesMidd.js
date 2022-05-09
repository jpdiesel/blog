const jwt = require('jsonwebtoken');

require('dotenv').config();

const nameValidation = async (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });
  next();
};

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
  } catch (err) {
    if (err) return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = {
  nameValidation,
  tokenValidation,
};
