// eslint-disable-next-line no-unused-vars
import Graph from "./Graph";
import Queue from "./Queue";

/**
 * @param {Graph} graph
 */
function dfs(graph, start = 0) {
  const visitedNodes = new Array(graph.size).fill(false);

  const recur = (index) => {
    if (visitedNodes[index]) {
      return;
    }
    console.log(index);

    visitedNodes[index] = true;
    const neighbors = graph.adjacencyList[index];

    neighbors.forEach((n) => {
      recur(n);
    });
  };

  recur(start);
}

/**
 * @param {Graph} graph
 */
function bfs(graph, start = 0) {
  const queue = new Queue();
  const visitedNodes = new Array(graph.size).fill(false);

  queue.enqueue(start);
  visitedNodes[start] = true;

  while (!queue.isEmpty()) {
    const current = queue.dequeue();

    console.log(current);

    const neighbors = graph.adjacencyList[current];
    neighbors.forEach((neighbor) => {
      if (visitedNodes[neighbor] === false) {
        queue.enqueue(neighbor);
        visitedNodes[neighbor] = true;
      }
    });
  }
}

/**
 * @param {Graph} graph
 * @returns {number}
 */
function isCyclic(graph) {
  const visitedNodes = new Array(graph.size).fill(false);
  const recursionStack = new Array(graph.size).fill(false);

  graph.adjacencyList.forEach((a) => a);

  /**
   * @param {integer} index
   * @returns {boolean}
   */
  const recur = (index) => {
    if (recursionStack[index]) {
      return true;
    }

    if (visitedNodes[index]) {
      return false;
    }

    visitedNodes[index] = true;
    recursionStack[index] = true;

    const neighbors = graph.adjacencyList[index];

    if (neighbors.some((n) => recur(n))) {
      return true;
    }

    recursionStack[index] = false;

    return false;
  };

  if (graph.adjacencyList.some((i) => recur(i))) {
    return true;
  }
  return false;
}

export { dfs, isCyclic, bfs };
