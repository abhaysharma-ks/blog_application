const Blog = require("./blogModel");
const Tag = require("./tagModel");
const BlogTag = require("./blogTagModel");

// 🔥 Many-to-Many
Blog.belongsToMany(Tag, {
  through: BlogTag,
  foreignKey: "blogId",
});

Tag.belongsToMany(Blog, {
  through: BlogTag,
  foreignKey: "tagId",
});