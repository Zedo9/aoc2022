import { readFileSync } from "fs";
import { resolve } from "path";
import {
  getCharactersCountBeforeFirstPacketMarkerP1,
  getCharactersCountBeforeFirstPacketMarkerP2,
} from "../../src/day6";

describe("Day 6", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const sample2FilePath = resolve(__dirname, "input/sample2.txt");
  const sample2Text = readFileSync(sample2FilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    expect(getCharactersCountBeforeFirstPacketMarkerP1(sampleText)).toBe(7);
    expect(getCharactersCountBeforeFirstPacketMarkerP1(sample2Text)).toBe(5);
    expect(getCharactersCountBeforeFirstPacketMarkerP1(inputText)).toBe(1544);
  });

  test("Part 2", () => {
    expect(getCharactersCountBeforeFirstPacketMarkerP2(sampleText)).toBe(19);
    expect(getCharactersCountBeforeFirstPacketMarkerP2(sample2Text)).toBe(23);
    expect(getCharactersCountBeforeFirstPacketMarkerP2(inputText)).toBe(2145);
  });
});
