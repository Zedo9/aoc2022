export function getCountOfVisitedPositionsP1(input: string) {
  const lines = input.split("\n");

  // [Head Position, Tail Position]
  const [headPosition, tailPosition] = [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ];

  // Map<position,visits count>
  const tailPositionsTracker = { "0|0": 1 };

  for (const line of lines) {
    const [direction, stepsStr] = line.split(" ");

    const steps = parseInt(stepsStr);
    const headMotion = getMotion(direction as Direction);

    for (let i = 0; i < steps; i++) {
      headPosition.x += headMotion.dx;
      headPosition.y += headMotion.dy;

      if (!areAdjacent(headPosition, tailPosition)) {
        if (
          areSameCol(headPosition, tailPosition) ||
          areSameRow(headPosition, tailPosition)
        ) {
          tailPosition.x += headMotion.dx;
          tailPosition.y += headMotion.dy;
        } else {
          const xDifference = headPosition.x - tailPosition.x;
          const yDifference = headPosition.y - tailPosition.y;

          const tailMotion = {
            dx: xDifference > 0 ? 1 : -1,
            dy: yDifference > 0 ? 1 : -1,
          };
          tailPosition.x += tailMotion.dx;
          tailPosition.y += tailMotion.dy;
        }

        const newTailPositionStr = `${tailPosition.x}|${tailPosition.y}`;
        if (newTailPositionStr in tailPositionsTracker) {
          tailPositionsTracker[newTailPositionStr]++;
        } else {
          tailPositionsTracker[newTailPositionStr] = 1;
        }
      }
    }
  }

  return Object.keys(tailPositionsTracker).length;
}

function areSameRow(pos1: Position, pos2: Position) {
  return pos1.y === pos2.y;
}

function areSameCol(pos1: Position, pos2: Position) {
  return pos1.x === pos2.x;
}

function areAdjacent(pos1: Position, pos2: Position) {
  const xDifference = pos1.x - pos2.x;
  const yDifference = pos1.y - pos2.y;

  return Math.abs(xDifference) < 2 && Math.abs(yDifference) < 2;
}

type Position = {
  x: number;
  y: number;
};

type Motion = {
  dx: number;
  dy: number;
};

enum Direction {
  Left = "L",
  Right = "R",
  Up = "U",
  Down = "D",
}

function getMotion(direction: Direction): Motion {
  let dx = 0;
  let dy = 0;
  switch (direction) {
    case Direction.Right:
      dx = 1;
      break;
    case Direction.Left:
      dx = -1;
      break;
    case Direction.Up:
      dy = 1;
      break;
    case Direction.Down:
      dy = -1;
      break;
    default:
      break;
  }

  return { dx, dy };
}
