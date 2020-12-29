const myenv = require('../config');
const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
    `postgres://${myenv.DB_USER}:${myenv.DB_PASS}@${myenv.DB_HOST}:${myenv.DB_PORT}/${myenv.DB_NAME}`,
    {
        logging: myenv.NODE_ENV !== 'development' ? false : console.log
    }
);

module.exports = sequelize;