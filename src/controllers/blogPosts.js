const BlogPost = require('../services/blogPosts');

const createPostController = async (req, res) => {
  try {
    const post = await BlogPost.createPost(req.body);
    return res.status(201).json(post);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  createPostController,
};
