const client = require("../config/redis");
const Blog = require("../models/blogModel");

const generateBlog = async (req, res) => {
  try {
    const { title, content } = req.body;

    
    if (!title || !content) {
      return res.status(400).json({ message: "Title and content are required" });
    }

    
    const blog = await Blog.create({
      title,
      content,
      userId: req.user.id, 
    });

    res.status(201).json({
      message: "Blog submitted for approval",
      blog
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const approveBlog = async (req, res) => {

    //  validation
  try {
    const { id } = req.params;

    const blog = await Blog.findByPk(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    blog.status = "approved";
    await blog.save();
    await client.del("approved_blogs")

    res.status(200).json({ message: "Blog approved" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getApprovedBlogs = async (req, res) => {
  try {

    // check cache
    const cached=await client.get("approved_blogs")
    if(cached){
      console.log("from redis")
      return res.json(JSON.parse(cached))
    }


    // fetch from db
    const blogs = await Blog.findAll({
      where: { status: "approved" }
    });

    // store in redis
    await client.set("approved_blogs",JSON.stringify(blogs),"EX",3600)
    if(!blogs){
        return res.status(400).json({
            message:"no blogs found"
        })
    }


    res.status(200).json(blogs);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const edit_blog=async(req,res)=>{
  try {
    const { id } = req.params; // blog id
    const { title, content } = req.body;

    // find blog
    const blog = await Blog.findByPk(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    //  check ownership
    if (blog.userId !== req.user.id) {
      return res.status(403).json({ message: "You can only edit your own blog" });
    }

    // optional: prevent editing approved blogs
    if (blog.status === "approved") {
      return res.status(400).json({ message: "Approved blog cannot be edited" });
    }

    // update fields
    if (title) blog.title = title;
    if (content) blog.content = content;

    await blog.save();
    // await client.del("approved_blogs") 

    res.status(200).json({
      message: "Blog updated successfully",
      blog
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const del_blog=async(req,res)=>{
  try {
    const { id } = req.params;

    
    const blog = await Blog.findByPk(id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    
    if (blog.userId !== req.user.id) {
      return res.status(403).json({ message: "You can only delete your own blog" });
    }

   
    await blog.destroy();
    await client.del("approved_blogs")

    res.status(200).json({
      message: "Blog deleted successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { generateBlog, approveBlog, getApprovedBlogs, edit_blog, del_blog};