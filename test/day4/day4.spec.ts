import { readFileSync } from "fs";
import { resolve } from "path";
import {
  getOverlappingPairsCount,
  getTotalOverlappingPairsCount,
} from "../../src/day4";

describe("Day 4", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    expect(getOverlappingPairsCount(sampleText)).toBe(2);
    expect(getOverlappingPairsCount(inputText)).toBe(542);
  });

  test("Part 2", () => {
    expect(getTotalOverlappingPairsCount(sampleText)).toBe(4);
    expect(getTotalOverlappingPairsCount(inputText)).toBe(900);
  });
});
