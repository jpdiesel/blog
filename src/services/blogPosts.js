const { BlogPost, PostsCategories, User, Category } = require('../../models');

const createPost = async ({ title, content, categoryIds }, userId) => {
  const post = await BlogPost.create({ title, content, userId });
  await Promise.all(categoryIds.map((id) => PostsCategories
  .create({ postId: post.id, categoryId: id })));

  return post;
};

const getAllBlogPosts = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories' },
    ],
  });

  return blogPosts;
};

const getPostById = async (id) => {
  const blogPost = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user' },
    { model: Category, as: 'categories' },
  ],
});
  return blogPost;
};

const deletePost = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

const updatePost = async (title, content, id) => {
  await BlogPost.update({ title, content }, { where: { id } });
  const updatedPost = await BlogPost.findByPk(id, {
    attributes: { exclude: ['published', 'updated'] },
    include: [
    { model: Category,
      as: 'categories',
    through: { attributes: [] } },
  ],
});
  return updatedPost;
};

module.exports = {
  createPost,
  getAllBlogPosts,
  getPostById,
  deletePost,
  updatePost,
};
