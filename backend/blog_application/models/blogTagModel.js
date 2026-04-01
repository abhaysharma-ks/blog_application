// const { sequelize } = require("../config/db");

// const BlogTag = sequelize.define("BlogTag", {},{
//     tableName:"blogtags"
// });

// module.exports=BlogTag

const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const BlogTag = sequelize.define(
  "BlogTag",
  {
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

    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "tag_id",
      references: {
        model: "tags",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "blogtags", // 🔥 better naming
    timestamps: false,
  }
);

module.exports = BlogTag;