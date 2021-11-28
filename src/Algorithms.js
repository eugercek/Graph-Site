import Graph from "./Graph";

/**
 * @param {Graph} graph
 */
function dfs(graph) {
  const { size } = graph;

  const visitedNodes = new Array(size).fill(false);

  const recur = (index) => {
    if (visitedNodes[index]) {
      return;
    }
    console.log(index);

    visitedNodes[index] = true;
    const neighbors = graph.adjacencyList[index];

    neighbors.filter((x) => !!x).forEach((n) => recur(n));
  };

  recur(0);
}

export { dfs };
