const Blog = require("../models/blogModel");
const Tag = require("../models/tagModel");
// const BlogTag = require("../models/blogTagModel");
// require("../models/join")

// const createTag = async (req, res) => {
//   try {
//     const { name } = req.body;

//     if(!name){
//         return res.status(500).json({
//             message:"tag name is required"
//         })
//     }

//     const tag = await Tag.create({ name });

//     res.status(201).json(tag);

//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const getTags = async (req, res) => {
//   try {
//     const tags = await Tag.findAll();
//     res.status(200).json(tags);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

const createTag = async (req, res) => {
  try {
    const { blogId, name } = req.body;

    if (!blogId || !name) {
      return res.status(400).json({
        message: "blogId and tag name are required",
      });
    }

    // 🔹 find blog
    const blog = await Blog.findByPk(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // 🔹 find or create tag
    const [tag] = await Tag.findOrCreate({
      where: { name },
    });

    // 🔥 attach tag to blog (THIS WILL INSERT INTO blogtags)
    await blog.addTag(tag);

    res.status(201).json({
      message: "Tag added to blog",
      tag,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

const getTags = async (req, res) => {
  try {
    const { blogId } = req.params;

    const blog = await Blog.findByPk(blogId, {
      include: {
        model: Tag,
        attributes: ["id", "name"],
        through: { attributes: [] },
      },
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json(blog.Tags);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { createTag , getTags};
