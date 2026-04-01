const redis = require("ioredis");
const dotenv=require("dotenv")
dotenv.config()

const client = new redis(process.env.redis_url);
console.log(process.env.redis_url)

client.on("connected", () => {
  console.log("Redis connected");
});
client.on("error", (err) => {
  console.log("Redis failed ->", err.message);
});

module.exports = client;
