const express = require('express');

const routes = express.Router();

const { createUserController } = require('../controllers/user');
// const { nameValidation, emailValidation, passwordValidation } = require('../middlewares/userMidd');

routes.post('/',
// nameValidation,
// emailValidation,
// passwordValidation, 
createUserController);

module.exports = routes;
