const Comment = require("../models/commentModel");

const addComment = async (req, res) => {
  try {
    const { content, blogId, parentId } = req.body;

    if(!content || !blogId ){
        return res.status(500).json({
            message:"content and blog id is required"
        })
    }
    // console.log(req.user.id)
    const comment = await Comment.create({
      content,
      blogId,
      userId: req.user.id,
      parentId: parentId || null
    });

    res.status(201).json(comment);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getComments = async (req, res) => {
  try {
    const { blog_id } = req.params;

    if(!blog_id){
        return res.status(500).json({
            message:"blog id is required"
        })
    }

    const comments = await Comment.findAll({
      where: { blog_id }
    });

    res.status(200).json(comments);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addComment, getComments };