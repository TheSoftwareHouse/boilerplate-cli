import { readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { FileParser } from "./file.parser";

let tempDocument: string;
const path = join(__dirname, "./tests/mock-file.txt");

describe("File parser", () => {
  beforeEach(() => {
    tempDocument = readFileSync(path, "utf8");
  });

  afterEach(() => {
    writeFileSync(path, tempDocument);
  });

  it("Can remove line from file", () => {
    const file = new FileParser(path);

    file.removeLinesIncludingKey("mock");

    const checkText = "very mocked";

    const checkFile = readFileSync(path, "utf8");
    checkFile
      .split("\n")
      .forEach((value) => expect(value).not.toContain(checkText));
    expect(checkFile.split("\n").length).toEqual(3);
  });
});
