import { resolve } from "path";
import { part1, part2 } from "../../src/day1";
import { readLines } from "../utils/index";

describe("Day 1", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleLines = readLines(sampleFilePath);

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputLines = readLines(inputFilePath);

  test("Part 1", () => {
    expect(part1(sampleLines)).toBe(24000);
    expect(part1(inputLines)).toBe(69912);
  });

  test("Part 2", () => {
    expect(part2(sampleLines)).toBe(45000);
    expect(part2(inputLines)).toBe(208180);
  });
});
