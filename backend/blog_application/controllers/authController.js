const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!email || !name || !password || !role) {
      res.status(500).json({ message: "information is missing" });
    }

    const user = await User.findOne({ where: { email: email } });
    if (user) {
      return res.status(400).json({ message: "user already exist" });
    }

    const hashed = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: name,
      email: email,
      password: hashed,
      role: role,
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const find = await User.findOne({ where: { email: email } });
    if (!find) {
      res.status(400).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, find.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: find.id,
        email: find.email,
        role: find.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" },
    );
    res.cookie("token", token, {
      httpOnly: true, 
      secure: false, 
      sameSite: "strict", 
      maxAge: 24 * 60 * 60 * 1000, 
    });

    res.status(200).json({
      message: "Login successful",
      token,
      user: {
        id: find.id,
        name: find.name,
        email: find.email,
        role: find.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    
    if (!token) {
      return res.status(400).json({ message: "No token found" });
    }
    
    await client.setEx(`blacklist:${token}`,86400,"true")

    res.status(200).json({ message: "Logged out successfully" });
    res.clearCookie("token");

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login, logout };
