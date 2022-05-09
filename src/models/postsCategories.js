const PostsCategories = (sequelize, _DataTypes) => {
  const postsCategories = sequelize.define('PostsCategories', {},
  { timestamps: false, tablename: 'PostsCategories' });

  postsCategories.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: postsCategories,
      foreignKey: 'postId',
      otherKey: 'categoryId',
      as: 'categories',
    });
    models.Category.belongsToMany(models.BlogPost, {
      through: postsCategories,
      foreignKey: 'categoryId',
      otherKey: 'postId',
      as: 'blogposts',
    });
  };

  return postsCategories;
};

module.exports = PostsCategories;
