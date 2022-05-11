const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
    title: { type: DataTypes.STRING, allowNull: false }, 
    content: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.STRING, allowNull: false },
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
