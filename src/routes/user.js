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

routes.get('/', listAllUsers, tokenValidation);

routes.get('/id', listUserById, tokenValidation);

module.exports = routes;
