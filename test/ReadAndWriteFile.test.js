const { readfiletest, writefiletest } = require("./utils/readAndWriteFile");

describe("Read and Write File", () => {
  test("read no of lines from input.txt", async () => {
    const result = await readfiletest("inputTest");
    expect(result).toBe(3);
  });

  test("write no of lines to output.txt", async () => {
    const result = await writefiletest("outputTest");
    expect(result).toBe(3);
  });
});
