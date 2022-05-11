const express = require('express');

const routes = express.Router();

const {
  createUserController,
  listAllUsers,
  listUserById,
  destroyUser,
} = require('../controllers/user');
const {
  nameValidation,
  emailValidation,
  passwordValidation,
  tokenValidation,
} = require('../middlewares/userMidd');

routes.post('/',
nameValidation,
emailValidation,
passwordValidation, 
createUserController);

routes.get('/', tokenValidation, listAllUsers);

routes.get('/:id', tokenValidation, listUserById);

routes.delete('/me', tokenValidation, destroyUser);

module.exports = routes;
