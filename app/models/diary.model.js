module.exports = (sequelize, Sequelize) => {
  let Diary = sequelize.define("diary", {
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
    date: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    caloriesConsumed: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    },
    caloriesBurned: {
      allowNull: false,
      type: Sequelize.DataTypes.INTEGER,
    },
  });
  return Diary;
};
