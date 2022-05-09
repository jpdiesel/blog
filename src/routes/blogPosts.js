const express = require('express');

const routes = express.Router();

const { createPostController } = require('../controllers/blogPosts');
const { postValidation, tokenValidation } = require('../middlewares/blogPostsMidd');

routes.post('/',
postValidation,
tokenValidation,
createPostController);

module.exports = routes;