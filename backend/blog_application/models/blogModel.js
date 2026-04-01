const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Blog = sequelize.define(
  "Blog",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    status: {
      type: DataTypes.ENUM("pending", "approved", "rejected"),
      defaultValue: "pending",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id", // matches your DB column
      references: {
        model: "users", // table name
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "blogs",
  },
);

module.exports = Blog;
