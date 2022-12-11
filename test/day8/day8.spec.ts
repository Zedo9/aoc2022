import { readFileSync } from "fs";
import { resolve } from "path";
// import { getMaxScenicScore, getVisibleTreesCount } from "../../src/day8";

describe("Day 8", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    //expect(getVisibleTreesCount(sampleText)).toBe(21);
    //expect(getVisibleTreesCount(inputText)).toBe(21);
  });

  test("Part 2", () => {
    // expect(getMaxScenicScore(sampleText)).toBe(8);
    // expect(getMaxScenicScore(inputText)).toBe(1815525);
  });
});
