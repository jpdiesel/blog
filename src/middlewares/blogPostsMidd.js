const jwt = require('jsonwebtoken');

const Category = require('../services/categories');
const Post = require('../services/blogPosts');

require('dotenv').config();

const notFound = '"categoryIds" not found';

const postValidation = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title) return res.status(400).json({ message: '"title" is required' });
  if (!content) return res.status(400).json({ message: '"content" is required' });
  if (!categoryIds) return res.status(400).json({ message: '"categoryIds" is required' });
  const allCategories = await Promise.all(categoryIds.map((id) => Category.findById(id)));
  const categoriesJSON = JSON.stringify(allCategories);
  const categories = JSON.parse(categoriesJSON);
  if (categories.includes(null)) return res.status(400).json({ message: notFound });
  next();
};

const tokenValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  // console.log(req.body);
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    jwt.verify(authorization, process.env.JWT_SECRET);
  } catch (err) {
    if (err) return res.status(401).json({ message: 'Expired or invalid token' });
  }
  next();
};

const userValidation = async (req, res, next) => {
  const { authorization } = req.headers;
  const { id } = req.params;
  const loggedUserId = jwt.decode(authorization).data.id;
  const post = await Post.getPostById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  const json = JSON.stringify(post);
  const postCreatorId = JSON.parse(json).userId;
  if (loggedUserId !== postCreatorId) return res.status(401).json({ message: 'Unauthorized user' });
  next();
};

module.exports = {
  tokenValidation,
  postValidation,
  userValidation,
};
