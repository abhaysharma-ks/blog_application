const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { sendWelcomeEmail } = require("./emailService");

const registerUser = async ({ name, email, password, role }) => {
  // check existing user
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) {
    const error = new Error("User already exists");
    error.statusCode = 400;
    throw error;
  }

  // hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // create user
  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    role,
  });
  await sendWelcomeEmail(newUser.email, newUser.name);

  return {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
};

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ where: { email } });

 
  if (!user) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    const err = new Error("Invalid email or password");
    err.statusCode = 401;
    throw err;
  }

  const token = jwt.sign(
    {
      id: user.id,
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  return {
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
};

module.exports = {
  registerUser,
  loginUser,
};
