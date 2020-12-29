
const sequelize = require('../services/database');
const { Sequelize, Model, DataTypes } = require('sequelize');

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  firstname: { type: DataTypes.STRING, require: true },
  lastname: DataTypes.STRING,
  birthdate: DataTypes.DATEONLY,
  password: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true, require: true },
  fullname: { 
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.firstname} ${this.lastname}`;
    },
    set(value) {
      throw new Error('Do not try to set the `fullName` value !')
    }
  },

});

module.exports = User;

