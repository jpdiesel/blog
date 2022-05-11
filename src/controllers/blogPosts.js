const jwt = require('jsonwebtoken');
const BlogPost = require('../services/blogPosts');

const createPostController = async (req, res) => {
  try {
    const { authorization } = req.header;
    const bla = jwt.verify(authorization, process.env.JWT_SECRET);
    console.log(bla);
    const post = await BlogPost.createPost(req.body);
    return res.status(201).json(post);
  } catch (e) {
    console.error(e);
  }
};

const getAllController = async (_req, res) => {
  try {
    const post = await BlogPost.getAllBlogPosts();
    return res.status(200).json(post);
  } catch (e) {
    console.log(e);
  }
};

const getPostByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await BlogPost.getPostById(id);
    if (!post) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(post);
  } catch (e) {
    console.log(e);
  }
};

const deletePostController = async (req, res) => {
  const { id } = req.params;
  try {
    await BlogPost.deletePost(id);
    return res.status(204).end();
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createPostController,
  getAllController,
  getPostByIdController,
  deletePostController,
};
