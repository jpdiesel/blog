const Category = (sequelize, DataTypes) => {
  const newCategory = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tablename: 'Categories',
  });

  return newCategory;
};

module.exports = Category;