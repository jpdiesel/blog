const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const emailError = '"email" must be a valid email';
const noEmail = '"email" is required';
const emptyEmail = '"email is not allowed to be empty';
const passwordError = '"password" length must be 6 characters long';
const noPassword = '"password" is required';
const emptyPassword = '"password" is not allowed to be empty';

const emailValidation = (req, res, next) => {
  const requistion = req.body;
  if (EMAIL_REGEX.test(requistion.email)) return res.status(400).json({ message: emailError });
  if (requistion.email === null) return res.status(400).json({ message: emptyEmail });
  if (!requistion.email) return res.status(400).json({ message: noEmail });
  next();
};

const passwordValidation = (req, res, next) => {
  const requistion = req.body;
  if (requistion.password.lengt !== 6) return res.status(400).json({ message: passwordError });
  if (requistion.password === null) return res.status(400).json({ message: emptyPassword });
  if (!requistion.password) return res.status(400).json({ message: noPassword });
  next();
};

module.exports = {
  emailValidation,
  passwordValidation,
};
