const express = require('express');

const routes = express.Router();

const {
  createPostController,
  getAllController,
  getPostByIdController,
  deletePostController,
} = require('../controllers/blogPosts');

const { 
  postValidation,
  tokenValidation,
  userValidation,
} = require('../middlewares/blogPostsMidd');

routes.post('/',
postValidation,
tokenValidation,
createPostController);

routes.get('/',
tokenValidation,
getAllController);

routes.get('/:id',
tokenValidation,
getPostByIdController);

routes.delete('/:id',
tokenValidation,
userValidation,
deletePostController);

module.exports = routes;