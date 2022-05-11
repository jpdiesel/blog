const express = require('express');

const routes = express.Router();

const { createPostController, getAllController } = require('../controllers/blogPosts');
const { postValidation, tokenValidation } = require('../middlewares/blogPostsMidd');

routes.post('/',
postValidation,
tokenValidation,
createPostController);

routes.get('/',
tokenValidation,
getAllController);

module.exports = routes;