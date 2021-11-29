/* eslint-disable no-console */
import Graph from "./Graph";
import { dfs, isCyclic, bfs, allCycles } from "./Algorithms";

const foo = new Graph(7);

const groups = {
  representation: "Adjacency List",
  dfs: "Depth First Traversal",
  cyclic: "Is Cyclic?",
  bfs: "Breadth First Traversal",
  allCycles: "List all cycles",
};

/* eslint-disable */
foo.addEdge(0, 1);
isCyclic;
foo.addEdge(1, 2);
foo.addEdge(1, 5);

foo.addEdge(2, 0);
foo.addEdge(2, 3);

foo.addEdge(3, 4);

foo.addEdge(4, 0);
foo.addEdge(4, 6);
foo.addEdge(5, 6);

console.group(groups.representation);
console.dir(foo.adjacencyList);
console.groupEnd(groups.representation);

console.group(groups.dfs);
dfs(foo);
console.groupEnd(groups.dfs);

console.group(groups.bfs);
bfs(foo);
console.groupEnd(groups.bfs);

console.group(groups.cyclic);
const isCyclicVal = isCyclic(foo);
console.log(isCyclicVal);
console.groupEnd(groups.cyclic);

console.group(groups.allCycles);
const cycleCount = allCycles(foo);
console.log(cycleCount);
console.groupEnd(groups.allCycles);

/* eslint-enable */
