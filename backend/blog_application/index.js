const express = require("express");
const dotenv = require("dotenv");
const { sequelize } = require("./config/db");
const router = require("./routes/authRoutes");
const cookieParser = require("cookie-parser");
const cors = require("cors")

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const tagRoutes = require("./routes/tagRoutes");
const commentRoutes = require("./routes/commentRoutes");
const client = require("./config/redis");
require('./models/jjoin')

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}))

app.use(cookieParser());
const PORT = process.env.PORT;

app.get("/", async (req, res) => {
  res.send("This is the blog application");
});

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/blog", blogRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/tag", tagRoutes);

const startServer = async () => {
  try {
    await client.ping();
    console.log("redis is connected");
    await sequelize.sync({ alter: true });
    console.log("database synced successfully");
    app.listen(PORT, () => {
      console.log(`the server is running on the port ${PORT}`);
    });
  } catch (error) {
    console.log("failed to sync databse:", error);
  }
};

startServer();
