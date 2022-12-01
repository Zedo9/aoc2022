import { readLines } from "../utils";

export function part1(): number {
  const filePath = "inputs/day1/input.txt";
  const lines = readLines(filePath);

  let maxElfTotal = 0;
  let currentElfTotal = 0;

  for (const line of lines) {
    if (!line) {
      if (maxElfTotal < currentElfTotal) {
        maxElfTotal = currentElfTotal;
      }
      currentElfTotal = 0;
      continue;
    }

    currentElfTotal += parseInt(line);
  }

  return maxElfTotal;
}

export function part2(): number {
  const filePath = "inputs/day1/input.txt";
  const lines = readLines(filePath);

  const topElfTotals = [0, 0, 0];
  let currentElfTotal = 0;

  for (const line of lines) {
    if (!line) {
      for (let i = 0; i < 3; i++) {
        if (currentElfTotal > topElfTotals[i]) {
          if (i !== 2) {
            topElfTotals[i + 1] = topElfTotals[i];
          }
          topElfTotals[i] = currentElfTotal;
          break;
        }
      }

      currentElfTotal = 0;
      continue;
    }

    currentElfTotal += parseInt(line);
  }

  return topElfTotals.reduce((total, current) => total + current, 0);
}
