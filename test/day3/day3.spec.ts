import { readFileSync } from "fs";
import { resolve } from "path";
import { getGroupedTotalPriorities, getTotalPriorities } from "../../src/day3";

describe("Day 3", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    expect(getTotalPriorities(sampleText)).toBe(157);
    expect(getTotalPriorities(inputText)).toBe(7691);
  });

  test("Part 2", () => {
    expect(getGroupedTotalPriorities(sampleText)).toBe(70);
    expect(getGroupedTotalPriorities(inputText)).toBe(2508);
  });
});
