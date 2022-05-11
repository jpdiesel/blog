const express = require('express');

const routes = express.Router();

const {
  createCategoryController,
  getAllCategoriesController,
} = require('../controllers/categories');
const { nameValidation, tokenValidation } = require('../middlewares/categoriesMidd');

routes.post('/',
nameValidation,
tokenValidation,
createCategoryController);

routes.get('/', tokenValidation, getAllCategoriesController);

module.exports = routes;