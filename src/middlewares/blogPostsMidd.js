const jwt = require('jsonwebtoken');

const Category = require('../models/categories');

require('dotenv').config();

const notFound = '"categoryIds" not found';

const postValidation = async (req, res, next) => {
  const { title, categoryIds, content } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  if (!content) return res.status(400).json({ message: '"content" is required' });
  const allCategories = await Promise.all(categoryIds.map((categoryId) =>
    Category.findByPk(categoryId)));
  if (allCategories.includes((item) => !item)) return res.status(400).json({ message: notFound });
  next();
};

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
  } catch (err) {
    if (err) return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

module.exports = {
  tokenValidation,
  postValidation,
};
