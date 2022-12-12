const STARTING_CYCLE = 20;
const STEP = 40;
const INSTRUCTIONS_CYCLE_COST = {
  addx: 2,
  noop: 1,
};

export function findSignalStrengthsSum_P1(input: string) {
  const instructions = input.split("\n");

  let currentCycle = 0;
  let signalStrengthsSum = 0;
  let registerValue = 1;

  for (const instruction of instructions) {
    const [command, value] = instruction.split(" ");

    const commandCost = INSTRUCTIONS_CYCLE_COST[command];

    for (let i = 0; i < commandCost; i++) {
      currentCycle++;
      const currentSignalStrength = currentCycle * registerValue;
      if (currentCycle % STEP === 20) {
        signalStrengthsSum += currentSignalStrength;
      }
    }

    if (command !== "noop") {
      registerValue += parseInt(value);
    }
  }

  return signalStrengthsSum;
}

export function getLetters_P2(input: string) {
  const instructions = input.split("\n");

  let currentCycle = 0;
  let registerValue = 0;

  const output = [];
  let currentRow = "";

  for (const instruction of instructions) {
    const [command, value] = instruction.split(" ");
    const commandCost = INSTRUCTIONS_CYCLE_COST[command];

    for (let i = 0; i < commandCost; i++) {
      currentCycle++;
      if (command !== "noop" && i === 1) {
        registerValue += parseInt(value);
      }

      if (Math.abs(currentRow.length - registerValue) < 2) {
        currentRow = `${currentRow}#`;
      } else {
        currentRow = `${currentRow}.`;
      }

      if (currentCycle % 40 === 0) {
        output.push(`#${currentRow}`);
        currentRow = "";
      }
    }
  }

  console.log(output);
}
