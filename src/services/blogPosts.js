const { BlogPost, PostsCategories, User, Category } = require('../models');

const createPost = async ({ title, content, categorysIds }) => {
  const post = await BlogPost.create(title, content, categorysIds);

  await Promise.all(categorysIds.map((id) => PostsCategories
  .create({ postId: post.id, categoryId: id })));

  return post;
};

const getAllBlogPosts = async () => {
  const allBlogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, 
        as: 'categories', 
        attributes: ['id', 'name'],
    },
    ],
  });

  return allBlogPosts;
};

module.exports = {
  createPost,
  getAllBlogPosts,
};
