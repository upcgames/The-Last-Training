function Knapsack(objectsArray, maxWeigth) {
  let K = new Array(objectsArray.length);
  for (let i = 0; i < objectsArray.length + 1; i++) {
    K[i] = new Array(maxWeigth);
  }
  for (let i = 0; i < objectsArray.length; i++) {
    for (let j = 0; j < maxWeigth; j++) {
      if (i == 0) {
        K[i][j] = 0;
      } else if (j < objectsArray[i].weight) {
        K[i][j] = K[i - 1][j];
      } else {
        K[i][j] = Math.max(
          objectsArray[i].val + K[i - 1][j - objectsArray[i].weight],
          K[i - 1][j]
        );
      }
    }
  }
  let nodes = [];
  let nodesIndexes = [];
  let i = objectsArray.length - 1;
  let j = maxWeigth - 1;
  let value = K[i][j];
  while (value != 0) {
    if (K[i][j] == K[i - 1][j]) {
      i -= 1;
    } else {
      nodes.push(objectsArray[i]);
      j -= objectsArray[i].weight;
      i -= 1;
      value = K[i][j];
    }
  }
  nodes.forEach(element => {
    nodesIndexes.push(element.id);
  });
  return {
    bestValue: K[objectsArray.length - 1][maxWeigth - 1],
    nodesComplete: nodes,
    nodes: nodesIndexes
  }
}
