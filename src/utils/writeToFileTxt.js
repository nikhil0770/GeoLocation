const fs = require("fs");
const path = require("path");

const writeLocationDetails = async (data) => {
  try {
    const pathToFile = path.resolve(__dirname, "../../output.txt");
    const locationData = data.latitude + "," + data.longitude;
    await fs.appendFileSync(pathToFile, locationData + "\n");
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { writeLocationDetails };
