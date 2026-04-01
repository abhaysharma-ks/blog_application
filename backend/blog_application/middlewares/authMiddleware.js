const jwt = require("jsonwebtoken");
const client = require("../config/redis");

const authMiddleware = async(req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Not logged in" });
    }

    // check redis blacklist
    const isBlacklisted= await client.get(`blacklist:${token}`)
    if(isBlacklisted){
      return res.status(401).json({
        message:"token invalid (logged out)"
      })
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "secretkey"
    );

    
    req.user = decoded;

    next();

  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddleware;