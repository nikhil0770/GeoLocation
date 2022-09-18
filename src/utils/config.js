require("dotenv").config();
const config = {
  PORT: process.env.PORT,
  HOST: process.env.HOST,
  API_KEY: process.env.API_KEY,
};

module.exports = { config };
