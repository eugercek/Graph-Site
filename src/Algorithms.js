/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars

import Graph from "./Graph";
import Queue from "./Queue";
import WeightedGraph from "./WeightedGraph";

/**
 * @param {Graph} graph
 *
 * Start recursion from a vertex.
 * - If vertex visited return
 * - Else
 *   - Set vertex visited
 *   - Call all direct neighbors of vertex (Some of them will wait in STACK!)
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
 *
 * Enqueue the initial vertex.
 *
 * LOOP until queue is empty
 *   - Dequeue current vertex.
 *   - Enqueue all neighbors of the vertex.
 *
 */
function bfs(graph, start = 0) {
  const queue = new Queue();
  const visitedNodes = new Array(graph.size).fill(false);

  // Don't forget to enqueue the initial vertex
  // Main logic is while queue is not empty
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

  /**
   * @param {integer} index
   * @returns {boolean}
   * DFS
   */
  const recur = (index) => {
    // If encountered same vertex in "a run" then we've cycled!
    if (recursionStack[index]) {
      console.log(index);
      return true;
    }

    // Below says it has been there and there is no cycle

    // When stack is 0 5 2
    // Program will see that It's already tried 2 -> 3 -> 4 path
    // 0 -> 1 -> 2 -> 3 -> 4
    //   ->   5 -^
    if (visitedNodes[index]) {
      return false;
    }

    visitedNodes[index] = true;
    recursionStack[index] = true;

    console.log(index);

    const neighbors = graph.adjacencyList[index];

    // Simple DFS
    if (neighbors.some((n) => recur(n))) {
      return true;
    }

    // Below means we are backtracking from the vertex, it'll pe popped from stack
    // But it'll be still reside in `visited` in above we've tried all the possible paths and
    // If code is here then there is no cycle
    recursionStack[index] = false;

    return false;
  };

  // If any search of cycle(with DFS in this algorithm) return true then we've found the cycle!
  for (let i = 0; i < graph.adjacencyList.length; i += 1) {
    if (recur(i)) {
      return true;
    }
  }

  // If no cycle detected starting from every vertex one by one
  // Then there is no cycle :)
  return false;
}

/**
 * @param {integer} index
 * @returns {integer}
 * DFS
 */
function allCycles(graph) {
  const visitedNodes = new Array(graph.size).fill(false);

  // Not stack ADT, checks if indexed vertex have been on stack
  // Not using real stack or fake stack with unordered array
  // Because with this method each lookup will be O(1)
  const recursionStack = new Array(graph.size).fill(false);

  // Real stack to pretty print
  const stack = [];

  let count = 0;

  /**
   * @param {integer} index
   * DFS
   */
  const recur = (index) => {
    if (recursionStack[index]) {
      console.log(stack);
      count += 1;
      // Return means backtrack manually
      return;
    }

    if (visitedNodes[index] !== false) {
      return;
    }

    visitedNodes[index] = true;
    recursionStack[index] = true;

    stack.push(index);

    const neighbors = graph.adjacencyList[index];

    // Simple DFS
    neighbors.forEach((n) => recur(n));

    recursionStack[index] = false;
    stack.pop(index);
  };

  // Graph can be disconnected, need to brute force from every vertex
  for (let i = 0; i < graph.adjacencyList.length; i += 1) {
    recur(i);
  }

  return count;
}

/**
 *
 * @param {WeightedGraph} graph
 */
function prim(graph) {
  const valueArray = new Array(graph.size).fill(Number.MAX_SAFE_INTEGER);

  // Which vertex have been added
  const setMST = new Array(graph.size).fill(false);

  const parentArray = new Array(graph.size);

  const minVertex = () => {
    let min = Number.MAX_SAFE_INTEGER;
    let vertex;

    for (let i = 0; i < graph.size; i++) {
      // If haven't visited and smallest we have seen
      if (setMST[i] === false && valueArray[i] < min) {
        vertex = i;
        min = valueArray[i];
      }
    }

    return vertex;
  };

  const printParent = () => {
    // Starting from 1 because first node can't have Parent it's the root
    for (let i = 1; i < graph.size; i++) {
      // parentArray[i] is the connected vertex
      console.log(
        `${parentArray[i]} -> ${graph.adjacencyMatrix[i][parentArray[i]]}`
      );
    }
  };

  // Edge = Vertices -1
  for (let i = 0; i < graph.size - 1; i++) {
    const min = minVertex();
    setMST[min] = true;

    for (let j = 0; i < graph.size; j++) {
      if (
        graph.adjacencyMatrix[min][j] && // If there is edge between min and j
        setMST[j] === false && // If j is already included there is no need to relax
        graph.adjacencyMatrix[min][j] < valueArray[j] // TODO I don't know
      ) {
        valueArray[j] = graph[min][j];
        parentArray[j] = min;
      }
    }
  }

  printParent();
}

export { dfs, isCyclic, bfs, allCycles, prim };
