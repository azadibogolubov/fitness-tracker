module.exports = (sequelize, Sequelize) => {
  const Ingredient = sequelize.define("ingredient", {
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

    quantity: {
      allowNull: false,
      type: Sequelize.DataTypes.DECIMAL(5, 2),
    },

    unit: {
      allowNull: false,
      type: Sequelize.DataTypes.STRING
    }
  });
  
  return Ingredient;
};
