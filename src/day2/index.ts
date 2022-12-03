const OUTCOME_WIN = 6;
const OUTCOME_LOSS = 0;
const OUTCOME_DRAW = 3;
const MY_POSSIBLE_SHAPES = ["X", "Y", "Z"];

export function getFinalScore(input: string) {
  const rounds = getRounds(input);
  return getScoreFromRounds(rounds);
}

export function getFinalScoreWithFixedOutcome(input: string) {
  const rounds = getRounds(input);
  const newRounds = buildRoundsForScore(rounds);
  return getScoreFromRounds(newRounds);
}

function getScoreFromRounds(rounds: string[]) {
  let score = 0;
  for (const round of rounds) {
    const [opponent, me] = round.split(" ");
    score += getOutcome(me, opponent) + getShapeScore(me);
  }
  return score;
}

function getRounds(input: string) {
  return input.split("\n");
}

function getOutcome(me: string, opponent: string) {
  if (isSameShape(me, opponent)) return OUTCOME_DRAW;

  if (
    (isRock(me) && isScissors(opponent)) ||
    (isScissors(me) && isPaper(opponent)) ||
    (isPaper(me) && isRock(opponent))
  ) {
    return OUTCOME_WIN;
  }

  return OUTCOME_LOSS;
}

function getShapeScore(shape: string) {
  if (isRock(shape)) return 1;
  if (isPaper(shape)) return 2;
  if (isScissors(shape)) return 3;
}

function isRock(shape: string) {
  return shape === "A" || shape === "X";
}

function isPaper(shape: string) {
  return shape === "B" || shape === "Y";
}

function isScissors(shape: string) {
  return shape === "C" || shape === "Z";
}

function isSameShape(shape1: string, shape2: string) {
  return (
    (isRock(shape1) && isRock(shape2)) ||
    (isPaper(shape1) && isPaper(shape2)) ||
    (isScissors(shape1) && isScissors(shape2))
  );
}

function buildRoundsForScore(rounds: string[]): string[] {
  const newRounds = [];
  for (const round of rounds) {
    const [opponent, expectedOutcome] = round.split(" ");
    const targetOutcome = decodeExpectedOutcome(expectedOutcome);
    for (const shape of MY_POSSIBLE_SHAPES) {
      const outcome = getOutcome(shape, opponent);
      if (outcome === targetOutcome) {
        newRounds.push(`${opponent} ${shape}`);
        break;
      }
    }
  }

  return newRounds;
}

function decodeExpectedOutcome(char: string) {
  if (char === "X") return OUTCOME_LOSS;
  if (char === "Y") return OUTCOME_DRAW;
  if (char === "Z") return OUTCOME_WIN;
}
