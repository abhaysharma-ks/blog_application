const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Tag = sequelize.define("Tag", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  name: {
    type: DataTypes.STRING,
    unique: true
  }
},{
  tableName:"tag"
});

module.exports= Tag