const express = require('express');

const routes = express.Router();

const { createCategoryController } = require('../controllers/categories');
const { nameValidation, tokenValidation } = require('../middlewares/categoriesMidd');

routes.post('/',
createCategoryController,
nameValidation,
tokenValidation);

module.exports = routes;