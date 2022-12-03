export function getTotalPriorities(input: string) {
  const rucksacks = getRucksacks(input);
  const itemTypes = [];

  for (const rucksack of rucksacks) {
    const [firstCompartment, secondCompartment] = getCompartments(rucksack);

    for (const type of firstCompartment) {
      if (secondCompartment.indexOf(type) !== -1) {
        itemTypes.push(type);
        break;
      }
    }
  }

  return itemTypes
    .map(getPriority)
    .reduce((total, current) => total + current, 0);
}

export function getGroupedTotalPriorities(input: string) {
  const rucksacks = getRucksacks(input);
  const rucksackGroups = getGroups(rucksacks);
  const itemTypes = [];

  for (const group of rucksackGroups) {
    const [rucksack1, rucksack2, rucksack3] = group;

    for (const type of rucksack1) {
      if (rucksack2.indexOf(type) !== -1 && rucksack3.indexOf(type) !== -1) {
        itemTypes.push(type);
        break;
      }
    }
  }

  return itemTypes
    .map(getPriority)
    .reduce((total, current) => total + current, 0);
}

function getRucksacks(input: string) {
  return input.split("\n");
}

function getPriority(char: string) {
  if (char.toUpperCase() === char) {
    return char.charCodeAt(0) - 38;
  } else return char.charCodeAt(0) - 96;
}

function getCompartments(rucksack: string) {
  const lengthHalf = rucksack.length / 2;
  return [
    rucksack.slice(0, lengthHalf),
    rucksack.slice(lengthHalf, rucksack.length),
  ];
}

function getGroups(rucksacks: string[]) {
  const groups = [];
  for (let i = 0; i < rucksacks.length; i += 3) {
    groups.push([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]]);
  }

  return groups;
}
