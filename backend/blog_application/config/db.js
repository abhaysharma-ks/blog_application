const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config()


const sequelize = new Sequelize('blogapplication', 'postgres', process.env.PGPass, {
  host: process.env.DB_HOST || 'localhost',
  dialect: 'postgres',
  logging:false
});

module.exports = {sequelize}