const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const nameError = '"displayName" must be at least 8 characters long';
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
  if (requistion.password.lengt !== 6) return res.status(400).json({ message: passwordError });
  if (!requistion.password) return res.status(400).json({ message: noPassword });
  next();
};

module.exports = {
  nameValidation,
  emailValidation,
  passwordValidation,
};
