module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.DataTypes.INTEGER
        },
        firstName: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
        },
        lastName: {
            allowNull: false,
            type: Sequelize.DataTypes.STRING
        }
    });

    return User;
};