export function getOverlappingPairsCount(input: string) {
  const pairs = input.split("\n").map((pair) => pair.split(","));
  let overlappingPairsCount = 0;

  for (const pair of pairs) {
    const [firstRange, secondRange] = pair;

    const r1 = firstRange.split("-").map((n) => parseInt(n));
    const r2 = secondRange.split("-").map((n) => parseInt(n));

    if (isFullyContainedRange(r1, r2) || isFullyContainedRange(r2, r1)) {
      overlappingPairsCount++;
    }
  }

  return overlappingPairsCount;
}

export function getTotalOverlappingPairsCount(input: string) {
  const pairs = input.split("\n").map((pair) => pair.split(","));
  let overlappingPairsCount = 0;

  for (const pair of pairs) {
    const [firstRange, secondRange] = pair;

    const r1 = firstRange.split("-").map((n) => parseInt(n));
    const r2 = secondRange.split("-").map((n) => parseInt(n));

    if (
      isPartiallyContained(r1, r2) ||
      isPartiallyContained(r2, r1) ||
      isFullyContainedRange(r1, r2) ||
      isFullyContainedRange(r2, r1)
    ) {
      overlappingPairsCount++;
    }
  }

  return overlappingPairsCount;
}

function isFullyContainedRange(r1: number[], r2: number[]) {
  const [r1Low, r1High] = r1;
  const [r2Low, r2High] = r2;
  return r1Low >= r2Low && r1High <= r2High;
}

function isPartiallyContained(r1: number[], r2: number[]) {
  const [r1Low] = r1;
  const [r2Low, r2High] = r2;
  return r1Low >= r2Low && r1Low <= r2High;
}
