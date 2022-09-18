const { readfiletest, writefiletest } = require("./utils/readAndWriteFile");

describe("Read and Write File", () => {
  //reading lines from file and verifying the number of locations read is correct or not
  test("read no of lines from input.txt", async () => {
    const result = await readfiletest("inputTest");
    expect(result).toBe(3);
  });

  //writing results to file and verifying if we got results for all the files
  test("write no of lines to output.txt", async () => {
    const result = await writefiletest("outputTest");
    expect(result).toBe(3);
  });
});
