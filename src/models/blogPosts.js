const BlogPost = (sequelize, DataTypes) => {
  const blogPost = sequelize.define('BlogPost', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, { 
    timestamps: false,
    tablename: 'BlogPosts',
  });
  return blogPost;
};

module.exports = BlogPost;
