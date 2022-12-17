export function getMonkeyBusinessLevel_P1(input: string) {
  const monkeysConfigs = input.split("\n\n");
  const monkeys: Monkey[] = [];

  const MAX_ROUNDS = 20;

  for (const monkeyConfig of monkeysConfigs) {
    const monkey = Monkey.fromStr(monkeyConfig, 3);
    monkeys.push(monkey);
  }

  for (let i = 0; i < MAX_ROUNDS; i++) {
    for (const monkey of monkeys) {
      while (monkey.items.length > 0) {
        monkey.inspectionCount++;
        const item = monkey.items[0];
        const newItem = monkey.operation(item);
        monkey.items.shift();
        monkey.test(newItem)
          ? monkey.throwItem(monkeys.at(monkey.trueTestTargetId), newItem)
          : monkey.throwItem(monkeys.at(monkey.falseTestTargetId), newItem);
      }
    }
  }

  return monkeys
    .map((m) => m.inspectionCount)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, current) => acc * current, 1);
}

export function getMonkeyBusinessLevel_P2(input: string) {
  const monkeysConfigs = input.split("\n\n");
  const monkeys: Monkey[] = [];

  const MAX_ROUNDS = 10000;
  let modulo = 1;

  for (const monkeyConfig of monkeysConfigs) {
    const monkey = Monkey.fromStr(monkeyConfig, 1);
    monkeys.push(monkey);
    modulo *= monkey.testComparator;
  }

  for (let i = 0; i < MAX_ROUNDS; i++) {
    for (const monkey of monkeys) {
      while (monkey.items.length > 0) {
        monkey.inspectionCount++;
        const item = monkey.items[0];
        const newItem = monkey.operation(item) % modulo;
        monkey.items.shift();
        monkey.test(newItem)
          ? monkey.throwItem(monkeys.at(monkey.trueTestTargetId), newItem)
          : monkey.throwItem(monkeys.at(monkey.falseTestTargetId), newItem);
      }
    }
  }

  return monkeys
    .map((m) => m.inspectionCount)
    .sort((a, b) => b - a)
    .slice(0, 2)
    .reduce((acc, current) => acc * current, 1);
}

class Monkey {
  id: number;
  items: number[];
  testComparator: number;
  operation: OperationFn;
  trueTestTargetId: number;
  falseTestTargetId: number;
  inspectionCount = 0;

  constructor(
    id: number,
    startingItems: number[],
    operation: OperationFn,
    testComparator: number,
    trueTestTargetId: number,
    falseTestTargetId: number
  ) {
    this.id = id;
    this.items = startingItems;
    this.testComparator = testComparator;
    this.operation = operation;
    this.trueTestTargetId = trueTestTargetId;
    this.falseTestTargetId = falseTestTargetId;
  }

  test(item: number) {
    return item % this.testComparator === 0;
  }

  throwItem(otherMonkey: Monkey, item: number) {
    otherMonkey.catchItem(item);
  }

  catchItem(item: number) {
    this.items.push(item);
  }

  static fromStr(str: string, div: number) {
    const [
      idStr,
      startingItemsStr,
      operationStr,
      testComparerStr,
      trueTestTargetStr,
      falseTestTargetStr,
    ] = str.split("\n");

    const id = parseInt(idStr.split(" ")[1].slice(0, -1));
    const items = startingItemsStr
      .split(": ")[1]
      .split(",")
      .map((x) => parseInt(x));
    const operation = getOperationFn(operationStr, div);
    const testComparator = parseInt(testComparerStr.split("by ")[1]);
    const trueTestTargetId = parseInt(trueTestTargetStr.split("monkey ")[1]);
    const falseTestTargetId = parseInt(falseTestTargetStr.split("monkey ")[1]);

    return new Monkey(
      id,
      items,
      operation,
      testComparator,
      trueTestTargetId,
      falseTestTargetId
    );
  }
}

function getOperationFn(str: string, div: number): OperationFn {
  const [_, operation, operationModifier] = str.split("=")[1].trim().split(" ");

  switch (operation) {
    case "*":
      return (item) =>
        Math.floor(
          (item *
            (operationModifier === "old"
              ? item
              : parseInt(operationModifier))) /
            div
        );
    case "+":
      return (item) => Math.floor((item + parseInt(operationModifier)) / div);
  }
}

type OperationFn = (item: number) => number;
