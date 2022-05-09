const Category = require('../services/categories');

const createCategoryController = async (req, res) => {
  try {
    const category = await Category.createCategory(req.body);
    return res.status(201).json(category);
  } catch (e) {
    console.error(e);
  }
};

const getAllCategoriesController = async (_req, res) => {
  try {
    const categories = await Category.getAllCategories();
    return res.status(200).json(categories);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createCategoryController,
  getAllCategoriesController,
};