export function getTopCratesWithCrateMover9000(input: string) {
  const { commands, stacks } = getCommandsAndInitialStacks(input);

  for (const command of commands) {
    const { cratesCount, source, destination } = parseCommand(command);

    for (let i = 0; i < cratesCount; i++) {
      const crate = stacks[source].pop();
      stacks[destination].push(crate);
    }
  }

  return stacks.map((stack) => stack.pop()).join("");
}

function parseCommand(command: string) {
  const moveIndex = command.indexOf("move");
  const fromIndex = command.indexOf("from");
  const toIndex = command.indexOf("to");

  const cratesCount = parseInt(
    command.slice(moveIndex + 4, fromIndex - 1).trim()
  );
  const source = parseInt(command.slice(fromIndex + 4, toIndex - 1).trim()) - 1;
  const destination = parseInt(command.slice(toIndex + 2).trim()) - 1;

  return { cratesCount, source, destination };
}

function getCommandsAndInitialStacks(input: string) {
  const lines = input.split("\n");
  const separationIndex = lines.indexOf("");

  const stackIdxStr = lines[separationIndex - 1];
  const stacksCount = parseInt(stackIdxStr.charAt(stackIdxStr.length - 2));

  const commands = lines.slice(separationIndex + 1);

  const stacks = [];
  for (let i = 0; i < stacksCount; i++) {
    stacks.push([]);
  }

  const stacksDescriptionLines = lines
    .slice(0, separationIndex - 1)
    .reverse()
    .map((el) => el.split(" "));

  for (const line of stacksDescriptionLines) {
    let idx = 0;
    let j = 0;

    while (j < line.length) {
      const element = line[j];
      if (element === "") {
        idx++;
        j += 4;
        continue;
      }
      stacks[idx].push(element.charAt(1));
      j++;
      idx++;
    }
  }

  return {
    stacks,
    commands,
  };
}

export function getTopCratesWithCrateMover9001(input: string) {
  const { commands, stacks } = getCommandsAndInitialStacks(input);

  for (const command of commands) {
    const { cratesCount, source, destination } = parseCommand(command);

    const buffer = [];
    for (let i = 0; i < cratesCount; i++) {
      buffer.push(stacks[source].pop());
    }

    stacks[destination].push(...buffer.reverse());
  }
  return stacks.map((stack) => stack.pop()).join("");
}
