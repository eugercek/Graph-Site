/* eslint-disable no-console */
import Graph from "./Graph";
import { dfs, isCyclic, bfs, allCycles, prim } from "./Algorithms";
import WeightedGraph from "./WeightedGraph";

const foo = new Graph(7);

const groups = {
  representation: "Adjacency List",
  dfs: "Depth First Traversal",
  cyclic: "Is Cyclic?",
  bfs: "Breadth First Traversal",
  allCycles: "List all cycles",
  prim: "Prim's algorithm",
};

/* eslint-disable */
foo.addEdge(0, 1);
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

const bar = new WeightedGraph(7);

bar.addEdgeWithWeight(0, 1, 12);
bar.addEdgeWithWeight(1, 2, 13);
bar.addEdgeWithWeight(1, 5, 11);

bar.addEdgeWithWeight(2, 0, 11);
bar.addEdgeWithWeight(2, 3, 18);

bar.addEdgeWithWeight(3, 4, 15);

bar.addEdgeWithWeight(4, 0, 17);
bar.addEdgeWithWeight(4, 6, 110);

bar.addEdgeWithWeight(5, 6, 12);

console.group(groups.prim);
prim(bar);
console.groupEnd(groups.prim);
