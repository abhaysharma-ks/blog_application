const User = require("../models/userModel");

const getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ["password"] }
    });

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getProfile };