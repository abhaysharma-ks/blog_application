const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const client = require("../config/redis");
const { registerUser, loginUser } = require("../services/authServices");

const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    return res.status(201).json({
      message: "User registered successfully",
      user,
    });

  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

const login = async (req, res) => {
  try {
    const data = await loginUser(req.body);

    res.cookie("token", data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // 🔥 fix
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Login successful",
      user: data.user,
    });

  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message || "Internal Server Error",
    });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(400).json({ message: "No token found" });
    }

    await client.set(`blacklist:${token}`, "true", "EX", 86400);

    res.clearCookie("token");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { register, login, logout };
