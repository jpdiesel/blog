const Category = (sequelize, DataTypes) => {
  const newCategory = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true, 
      allowNull: false,
    },
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