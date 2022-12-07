const MAX_TOTAL_SIZE = 100_000;
const NEEDED_SPACE = 30000000;
const TOTAL_SPACE = 70000000;

// Part 1
export function getTotalSizeOfDirectoriesToBeRemoved(input: string) {
  const dirs = getDirsWithSizes(input);

  return dirs.reduce(
    (total, curr) => (curr.size <= MAX_TOTAL_SIZE ? total + curr.size : total),
    0
  );
}

// Part 2
export function getSizeOfDirectoryToBeRemoved(input: string) {
  const dirs = getDirsWithSizes(input);
  const rootSize = dirs[0].size;
  const unusedSpace = TOTAL_SPACE - rootSize;

  for (const dir of dirs.sort((a, b) => a.size - b.size)) {
    if (unusedSpace + dir.size > NEEDED_SPACE) return dir.size;
  }
}

type Dir = {
  path: string[];
  size: number;
};

function isSubArray(arr1: string[], arr2: string[]) {
  return arr2.every(
    (element) =>
      arr1.includes(element) &&
      arr2.filter((el) => el === element).length <=
        arr1.filter((el) => el === element).length
  );
}

function getDirsWithSizes(input: string) {
  const lines = input.split("\n");

  const currentPath = ["/"];
  const dirs: Dir[] = [{ path: ["/"], size: 0 }];

  for (const line of lines.slice(2)) {
    if (line.startsWith("$ ls") || line.startsWith("dir")) {
      continue;
    }

    if (line.startsWith("$ cd")) {
      const destination = line.split(" ")[line.split(" ").length - 1];

      if (destination === "..") {
        currentPath.pop();
      } else {
        currentPath.push(destination);
        dirs.push({ path: currentPath.map((x) => x), size: 0 });
      }
      continue;
    }

    // file
    const [fileSize, _] = line.split(" ");

    for (const dir of dirs) {
      if (isSubArray(currentPath, dir.path)) {
        dir.size += parseInt(fileSize);
      }
    }
  }
  return dirs;
}
