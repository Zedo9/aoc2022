import { readFileSync } from "fs";
import { resolve } from "path";
import { part1, part2 } from "../../src/day1";

describe("Day 1", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    expect(part1(sampleText)).toBe(24000);
    expect(part1(inputText)).toBe(69912);
  });

  test("Part 2", () => {
    expect(part2(sampleText)).toBe(45000);
    expect(part2(inputText)).toBe(208180);
  });
});
