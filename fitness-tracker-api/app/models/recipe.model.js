module.exports = (sequelize, Sequelize) => {
  const Recipe = sequelize.define("recipe", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
    },
    calories: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    },
    servings: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    },
    servingSize: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    },
    servingUnit: {
      allowNull: false,
      type: Sequelize.DataTypes.DECIMAL(5, 2),
    },
  });
  return Recipe;
};
