const express = require('express');

const routes = express.Router();

const { loginController } = require('../controllers/login');
// const { nameValidation, emailValidation, passwordValidation } = require('../middlewares/userMidd');

routes.post('/',
// nameValidation,
// emailValidation,
// passwordValidation, 
loginController);

module.exports = routes;