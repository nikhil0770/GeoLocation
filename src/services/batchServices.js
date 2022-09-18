const { readFileFromTxt } = require("../utils/readFileTxt");

const batchService = async (req, res) => {
  //get Latitude and longitude from list of Locations in Input.txt
  try {
    //reading locations from input.txt using the readFileFromTxt
    readFileFromTxt();
    res
      .status(200)
      .json({ message: "your batch output has been stored in output.txt" });
  } catch (error) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { batchService };
