const BlogPost = require('../services/blogPosts');

const createPostController = async (req, res) => {
  try {
    const post = await BlogPost.createPost(req.body);
    return res.status(201).json(post);
  } catch (e) {
    console.error(e);
  }
};

const getAllController = async (req, res) => {
  try {
    const post = await BlogPost.getAllBlogPosts();
    return res.status(200).json(post);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createPostController,
  getAllController,
};
