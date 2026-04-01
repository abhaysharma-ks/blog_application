const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Comment = sequelize.define("Comment", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  content: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  blogId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "blog_id",
      references: {
        model: "blogs",
        key: "id",
      },
      onDelete: "CASCADE",
    },

    // 🔥 User relation
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },

    // 🔥 Self relation (replies)
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "parent_id",
      references: {
        model: "comments",
        key: "id",
      },
      onDelete: "CASCADE",
    },
},{
  tableName:"comments"
});

module.exports=Comment