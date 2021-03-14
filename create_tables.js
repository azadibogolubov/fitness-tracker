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

let Ingredient = sequelize.define('ingredient', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
    },

    userId: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
    },

    name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
    },

    quantity: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL(5,2)
    },

    unit: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
    }
});
//======================================= Recipe ======================

let Recipe = sequelize.define('recipe', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.DataTypes.STRING
    },
    calories: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
    },
    servings: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
    },
    servingSize: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
    },
    servingUnit: {
        allowNull: false,
        type: Sequelize.DataTypes.DECIMAL(5,2)
    },
});
//============================================== Diary ===============================
let Diary = sequelize.define('diary', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
    },
    date: {
        allowNull: false,
        type: Sequelize.DATE
    },
    caloriesConsumed: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
    },
    caloriesBurned: {
        allowNull: false,
        type: Sequelize.DataTypes.INTEGER
    },
});
//====================

User.sync().then(() => {
    console.log('User table created');
}).finally(() => {
    sequelize.close();
});

Ingredient.sync().then(() => {
    console.log('Ingredient table created');
}).finally(() => {
    sequelize.close();
});

//====================

Recipe.sync().then(() => {
    console.log('Recipe table created');
}).finally(() => {
    sequelize.close();
});

Diary.sync().then(() => {
    console.log('Diary table created');
}).finally(() => {
    sequelize.close();
});