const fs = require("fs");
const path = require("path");
const readline = require("readline");

const readfiletest = async (filename) => {
  //reading from inputTest.txt and verifying if all locations are read from file or not
  try {
    const pathForInput = path.resolve(__dirname, `../${filename}.txt`);
    const filestream = fs.createReadStream(pathForInput);

    const rl = readline.createInterface({
      input: filestream,
      crlfDelay: Infinity,
    });
    const response = [];
    for await (const line of rl) {
      response.push(line);
    }

    return response.length;
  } catch (error) {
    return { error: error.message };
  }
};

const writefiletest = async (filename) => {
  //reading from inputTest.txt ,fetching responses for mentioned locations
  // and then writing it to outputTest.txt
  try {
    const dataAppend = "test data";
    const pathForOutput = path.resolve(__dirname, `../${filename}.txt`);
    const inputTestLength = await readfiletest("inputTest");

    for (let i = 0; i < inputTestLength; i++) {
      await fs.appendFileSync(pathForOutput, dataAppend + "\n");
    }

    const result = await readfiletest(filename);
    return result;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { readfiletest, writefiletest };
