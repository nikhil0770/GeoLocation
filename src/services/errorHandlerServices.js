const nodeCache = require("node-cache");
const cache = new nodeCache({ stdTTL: 100, checkperiod: 120 });

const errorHandlerServices = async (req, res) => {
  try {
    res.json({ message: "invalid path/url" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { errorHandlerServices };
