const express = require('express');

const routes = express.Router();

const { loginController } = require('../controllers/login');
const { emailValidation, passwordValidation } = require('../middlewares/loginMidd');

routes.post('/',
emailValidation,
passwordValidation, 
loginController);

module.exports = routes;