import { readFileSync } from "fs";
import { resolve } from "path";
import {
  getMonkeyBusinessLevel_P1,
  getMonkeyBusinessLevel_P2,
} from "../../src/day11";

describe("Day 11", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    expect(getMonkeyBusinessLevel_P1(sampleText)).toBe(10605);
    expect(getMonkeyBusinessLevel_P1(inputText)).toBe(78678);
  });

  test("Part 2", () => {
    expect(getMonkeyBusinessLevel_P2(sampleText)).toBe(2713310158);
    expect(getMonkeyBusinessLevel_P2(inputText)).toBe(15333249714);
  });
});
