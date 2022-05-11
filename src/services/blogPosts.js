const { BlogPost, PostsCategories, User, Category } = require('../../models');

const createPost = async ({ title, content, categorysIds }) => {
  const post = await BlogPost.create(title, content);

  await Promise.all(categorysIds.map((id) => PostsCategories
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

module.exports = {
  createPost,
  getAllBlogPosts,
  getPostById,
  deletePost,
};
