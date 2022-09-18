const nodeCache = require("node-cache");
const cache = new nodeCache({ stdTTL: 100, checkperiod: 120 });

const noResourceHandlerServices = async (req, res) => {
  try {
    res.status(503).json({ message: "invalid path/url" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { noResourceHandlerServices };
