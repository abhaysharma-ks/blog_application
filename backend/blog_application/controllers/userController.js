const Blog = require("../models/blogModel");
const User = require("../models/userModel");

const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] },
      include:[
        {
          model:Blog,
          attributes:["id","title", "content", "createdAt","status"]
        }
      ]

    });

    if(!user){
      return res.status(401).json({message:"not logged in"})
    }

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProfile };