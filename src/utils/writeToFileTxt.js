const fs = require("fs");
const path = require("path");

const writeLocationDetails = async (data) => {
  //writing data to output.txt
  try {
    const pathToFile = path.resolve(__dirname, "../../output.txt");
    await fs.appendFileSync(pathToFile, data + "\n");
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { writeLocationDetails };
