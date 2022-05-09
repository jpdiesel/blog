const express = require('express');

const routes = express.Router();

const {
  createCategoryController,
  getAllCategoriesController,
} = require('../controllers/categories');
const { nameValidation, tokenValidation } = require('../middlewares/categoriesMidd');

routes.post('/',
createCategoryController,
nameValidation,
tokenValidation);

routes.get('/', getAllCategoriesController, tokenValidation);

module.exports = routes;