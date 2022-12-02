import { readFileSync } from "fs";

export function readLines(inputFile: string): string[] {
  const text = readFileSync(inputFile, "utf8");
  const lines = text.split("\n");

  return lines;
}
