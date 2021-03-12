const Sequelize = require('sequelize');

const path = 'mysql://root@localhost:3306/fitness';
const sequelize = new Sequelize(path, {
    operatorsAliases: false
});

let User = sequelize.define('user', {
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

User.sync().then(() => {
    console.log('New table created');
}).finally(() => {
    sequelize.close();
})