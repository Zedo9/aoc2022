import { readFileSync } from "fs";
import { resolve } from "path";
import { getCountOfVisitedPositionsP1 } from "../../src/day9";

describe("Day 9", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    expect(getCountOfVisitedPositionsP1(sampleText)).toBe(13);
    expect(getCountOfVisitedPositionsP1(inputText)).toBe(6357);
  });

  test("Part 2", () => {});
});
