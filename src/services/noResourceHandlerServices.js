const nodeCache = require("node-cache");
const cache = new nodeCache({ stdTTL: 100, checkperiod: 120 });

const noResourceHandlerServices = async (req, res) => {
  //returning a resposne for invalid url
  res.status(503).json({ message: "invalid path/url" });
};

module.exports = { noResourceHandlerServices };
