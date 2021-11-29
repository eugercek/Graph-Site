/* eslint-disable no-console */
// eslint-disable-next-line no-unused-vars
import Graph from "./Graph";
import Queue from "./Queue";

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

export { dfs, isCyclic, bfs, allCycles };
