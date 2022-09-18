const fs = require("fs");
const path = require("path");
const readline = require("readline");

const readfiletest = async (filename) => {
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
