import { readFileSync } from "fs";
import { resolve } from "path";
import {
  getTopCratesWithCrateMover9000,
  getTopCratesWithCrateMover9001,
} from "../../src/day5";

describe("Day 5", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    expect(getTopCratesWithCrateMover9000(sampleText)).toBe("CMZ");
    expect(getTopCratesWithCrateMover9000(inputText)).toBe("CWMTGHBDW");
  });

  test("Part 2", () => {
    expect(getTopCratesWithCrateMover9001(sampleText)).toBe("MCD");
    expect(getTopCratesWithCrateMover9001(inputText)).toBe("SSCGWJCRB");
  });
});
