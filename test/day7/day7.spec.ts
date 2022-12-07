import { readFileSync } from "fs";
import { resolve } from "path";
import {
  getSizeOfDirectoryToBeRemoved,
  getTotalSizeOfDirectoriesToBeRemoved,
} from "../../src/day7";

describe("Day 7", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    expect(getTotalSizeOfDirectoriesToBeRemoved(sampleText)).toBe(95437);
    expect(getTotalSizeOfDirectoriesToBeRemoved(inputText)).toBe(1648397);
  });

  test("Part 2", () => {
    expect(getSizeOfDirectoryToBeRemoved(sampleText)).toBe(24933642);
    expect(getSizeOfDirectoryToBeRemoved(inputText)).toBe(1815525);
  });
});
