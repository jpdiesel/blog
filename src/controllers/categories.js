const Category = require('../services/categories');

const createCategoryController = async (req, res) => {
  try {
    const category = await Category.createCategory(req.body);
    return res.status(201).json(category);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  createCategoryController,
};