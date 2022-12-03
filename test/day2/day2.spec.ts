import { readFileSync } from "fs";
import { resolve } from "path";
import {
  getFinalScore,
  getFinalScoreWithFixedOutcome,
} from "../../src/day2/index";

describe("Day 2", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    expect(getFinalScore(sampleText)).toBe(15);
    expect(getFinalScore(inputText)).toBe(11841);
  });

  test("Part 2", () => {
    expect(getFinalScoreWithFixedOutcome(sampleText)).toBe(12);
    expect(getFinalScoreWithFixedOutcome(inputText)).toBe(13022);
  });
});
