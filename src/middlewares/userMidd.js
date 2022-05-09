const jwt = require('jsonwebtoken');

require('dotenv').config();

const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const nameError = '"displayName" length must be at least 8 characters long';
const emailError = '"email" must be a valid email';
const noEmail = '"email" is required';
const passwordError = '"password" length must be 6 characters long';
const noPassword = '"password" is required';

const nameValidation = (req, res, next) => {
  const requistion = req.body;
  if (requistion.displayName.length < 8) return res.status(400).json({ message: nameError });
  next();
};

const emailValidation = (req, res, next) => {
  const requistion = req.body;
  if (EMAIL_REGEX.test(requistion.email)) return res.status(400).json({ message: emailError });
  if (!requistion.email) return res.status(400).json({ message: noEmail });
  next();
};

const passwordValidation = (req, res, next) => {
  const requistion = req.body;
  if (requistion.password.length !== 6) return res.status(400).json({ message: passwordError });
  if (!requistion.password) return res.status(400).json({ message: noPassword });
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
  
  // linha 36 feita com a ajuda do link a seguir:
  // https://github.com/auth0/node-jsonwebtoken
  next();
};

module.exports = {
  nameValidation,
  emailValidation,
  passwordValidation,
  tokenValidation,
};
