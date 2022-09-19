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

    //reading lines in the file
    const lines = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });

    for await (const line of lines) {
      //making a request for the each location
      const response = await axios.get(
        `${config.HOST}/api/geoCode?address=${line}&key=${config.API_KEY}`
      );
      //writing the fetched results into output.txt
      const data = response.data.latitude + "," + response.data.longitude;
      await writeLocationDetails(data);
    }

    lines.close();
  } catch (err) {
    return { error: err.response.data.error.message };
  }
};

module.exports = { readFileFromTxt };
