const express = require('express');

const routes = express.Router();

const {
  createPostController,
  getAllController,
  getPostByIdController,
  deletePostController,
  updatePostController,
} = require('../controllers/blogPosts');

const { 
  tokenValidation,
  postValidation,
  userValidation,
  updatePostValidation,
} = require('../middlewares/blogPostsMidd');

routes.post('/',
tokenValidation,
postValidation,
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

routes.put('/:id',
tokenValidation,
updatePostValidation,
updatePostController);

module.exports = routes;