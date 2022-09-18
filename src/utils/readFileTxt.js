const { default: axios } = require("axios");
const fs = require("fs");
const path = require("path");
const readline = require("readline");
const { config } = require("../utils/config");
const { writeLocationDetails } = require("./writeToFileTxt");

const readFileFromTxt = async () => {
  const pathToInputFile = path.resolve(__dirname, "../../input.txt");
  try {
    const fileStream = fs.createReadStream(pathToInputFile);

    const lines = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of lines) {
      const response = await axios.get(
        `${config.HOST}/api/geoCode?address=${line}&key=${config.API_KEY}`
      );
      await writeLocationDetails(response.data);
    }

    lines.close();
  } catch (err) {
    return { error: err.message };
  }
};

module.exports = { readFileFromTxt };
