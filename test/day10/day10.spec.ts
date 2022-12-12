import { readFileSync } from "fs";
import { resolve } from "path";
import { findSignalStrengthsSum_P1, getLetters_P2 } from "../../src/day10";

describe("Day 10", () => {
  const sampleFilePath = resolve(__dirname, "input/sample.txt");
  const sampleText = readFileSync(sampleFilePath, "utf8");

  const inputFilePath = resolve(__dirname, "input/input.txt");
  const inputText = readFileSync(inputFilePath, "utf8");

  test("Part 1", () => {
    expect(findSignalStrengthsSum_P1(sampleText)).toBe(13140);
    expect(findSignalStrengthsSum_P1(inputText)).toBe(13440);
  });

  test("Part 2", () => {
    /* sampleText
		##..##..##..##..##..##..##..##..##..##..
		###...###...###...###...###...###...###.
		####....####....####....####....####....
		#####.....#####.....#####.....#####.....
		######......######......######......####
		#######.......#######.......#######.....
		*/
    getLetters_P2(sampleText);

    /* inputText
		###..###..####..##..###...##..####..##..
		#..#.#..#....#.#..#.#..#.#..#....#.#..#.
		#..#.###....#..#....#..#.#..#...#..#..#.
		###..#..#..#...#.##.###..####..#...####.
		#....#..#.#....#..#.#.#..#..#.#....#..#.
		#....###..####..###.#..#.#..#.####.#..#.
		*/
    getLetters_P2(inputText);
  });
});
