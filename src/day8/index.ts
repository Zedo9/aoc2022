export function getVisibleTreesCount(input: string) {
  const lines = input.split("\n").map((el) => el.split(""));
  const rows = lines.length;
  const cols = lines[0].length;

  const edgeVisibleTreesCount = (rows + cols - 2) * 2;
  let insideVisibleTreesCount = 0;

  for (let row = 1; row < lines.length - 1; row++) {
    const treesOnSameRow = lines[row];

    for (let col = 1; col < lines[0].length - 1; col++) {
      const treesOnSameCol = lines.map((line) => line[col]);

      const currentTreeHeight = lines[row][col];

      const treesOnTheRight = treesOnSameRow.slice(col + 1);
      const treesOnTheLeft = treesOnSameRow.slice(0, col);
      const treesNorth = treesOnSameCol.filter((_, index) => index < row);
      const treesSouth = treesOnSameCol.filter((_, index) => index > row);

      const edges = [treesOnTheRight, treesOnTheLeft, treesNorth, treesSouth];

      for (const edge of edges) {
        if (edge.some((height) => height >= currentTreeHeight)) continue;
        insideVisibleTreesCount++;
        break;
      }
    }
  }

  return insideVisibleTreesCount + edgeVisibleTreesCount;
}

export function getMaxScenicScore(input: string) {
  const lines = input.split("\n").map((el) => el.split(""));
  const rows = lines.length;
  const cols = lines[0].length;

  let maxScenicScore = 0;

  for (let row = 1; row < lines.length - 1; row++) {
    const treesOnSameRow = lines[row];

    for (let col = 1; col < lines[0].length - 1; col++) {
      const treesOnSameCol = lines.map((line) => line[col]);

      const currentTreeHeight = lines[row][col];

      const treesOnTheRight = treesOnSameRow.slice(col + 1);
      const treesOnTheLeft = treesOnSameRow.slice(0, col);
      const treesNorth = treesOnSameCol.filter((_, index) => index < row);
      const treesSouth = treesOnSameCol.filter((_, index) => index > row);

      const edges = [treesOnTheRight, treesOnTheLeft, treesNorth, treesSouth];

      const viewDistances = [];

      for (const edge of edges) {
        let viewingDistance = 1;
        let lastTreeHeight = currentTreeHeight;
        for (let i = 0; i < edge.length; i++) {
          const height = edge[i];
          if (height >= lastTreeHeight && lastTreeHeight <= currentTreeHeight) {
            break;
          }

          lastTreeHeight = height;

          if (i + 1 !== edge.length) {
            viewingDistance++;
          }
        }

        viewDistances.push(viewingDistance);
      }

      console.log(currentTreeHeight);

      console.log(viewDistances);

      const scenicScore = viewDistances.reduce(
        (product, viewDistance) => product * viewDistance,
        1
      );
      if (scenicScore > maxScenicScore) {
        maxScenicScore = scenicScore;
      }
    }
  }

  return maxScenicScore;
}
