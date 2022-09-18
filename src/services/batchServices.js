const { readFileFromTxt } = require("../utils/readFileTxt");

const batchService = async (req, res) => {
  //get Latitude and longitude from list of Locations in Input.txt
  try {
    readFileFromTxt();
    res.json({ message: "your batch output has been stored in output.txt" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { batchService };
