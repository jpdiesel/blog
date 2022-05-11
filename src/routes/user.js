const express = require('express');

const routes = express.Router();

const { createUserController, listAllUsers, listUserById } = require('../controllers/user');
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

module.exports = routes;
