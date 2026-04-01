const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize('blogapplication', 'postgres', process.env.PGPass, {
  host: 'localhost',
  dialect: 'postgres',
  logging:false
});

module.exports = {sequelize}