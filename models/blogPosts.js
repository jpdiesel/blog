const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, { 
    timestamps: true,
    tablename: 'BlogPosts',
    createdAt: 'published',
    updatedAt: 'published',
  });

  blogPost.associate = (models) => {
    blogPost.belongsTo(models.User, { foreingKey: 'userId', as: 'user' });
  };

  return blogPost;
};

module.exports = BlogPost;
