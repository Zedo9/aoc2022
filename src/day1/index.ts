export function part1(text: string): number {
  const input = text.split("\n");

  let maxElfTotal = 0;
  let currentElfTotal = 0;

  for (const line of input) {
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

export function part2(text: string): number {
  const input = text.split("\n");

  const topElfTotals = [0, 0, 0];
  let currentElfTotal = 0;

  for (const line of input) {
    if (!line) {
      for (let i = 0; i < 3; i++) {
        if (currentElfTotal > topElfTotals[i]) {
          for (let j = 2; j > i; j--) {
            topElfTotals[j] = topElfTotals[j - 1];
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
