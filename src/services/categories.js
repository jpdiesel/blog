const { Category } = require('../../models');

const createCategory = async (name) => {
  const category = await Category.create(name);
  return category;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

const findById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

module.exports = {
  createCategory,
  getAllCategories,
  findById,
};