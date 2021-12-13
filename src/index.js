/* eslint-disable no-console */
import Graph from "./Graph";
import UndirectedGraph from "./UndirectedGraph";
import {
  dfs,
  isCyclic,
  bfs,
  allCycles,
  prim,
  isCyclicUndirected,
  topologicalSort,
  connectedComponents,
  shortestPathBFS,
} from "./Algorithms";
import WeightedGraph from "./WeightedGraph";
import dijkstraDemo from "./demos/Dijkstra";
import bellmanFordDemo from "./demos/BellmanFord";

// const foo = new Graph(7);

// const groups = {
//   representation: "Adjacency List",
//   dfs: "Depth First Traversal",
//   cyclic: "Is Cyclic?",
//   bfs: "Breadth First Traversal",
//   allCycles: "List all cycles",
//   prim: "Prim's algorithm",
//   undirected: "Undirected",
//   topological: "Topological sort",
//   connected: "Connected Components:",
//   BFSShortest: "Shortest Path with bfs",
// };

// /* eslint-disable */
// foo.addEdge(0, 1);
// foo.addEdge(1, 2);
// foo.addEdge(1, 5);

// foo.addEdge(2, 0);
// foo.addEdge(2, 3);

// foo.addEdge(3, 4);
// foo.addEdge(4, 0);
// foo.addEdge(4, 6);
// foo.addEdge(5, 6);

// console.group(groups.representation);
// console.dir(foo.adjacencyList);
// console.groupEnd(groups.representation);

// console.group(groups.dfs);
// dfs(foo);
// console.groupEnd(groups.dfs);

// console.group(groups.bfs);
// bfs(foo);
// console.groupEnd(groups.bfs);

// console.group(groups.cyclic);
// const isCyclicVal = isCyclic(foo);
// console.log(isCyclicVal, "color: green");
// console.groupEnd(groups.cyclic);

// console.group(groups.allCycles);
// const cycleCount = allCycles(foo);
// console.log(cycleCount);
// console.groupEnd(groups.allCycles);

// /* eslint-enable */

// const weightedGraph = new WeightedGraph(7);

// weightedGraph.addEdgeWithWeight(0, 1, 12);
// weightedGraph.addEdgeWithWeight(1, 2, 13);
// weightedGraph.addEdgeWithWeight(1, 5, 11);

// weightedGraph.addEdgeWithWeight(2, 0, 11);
// weightedGraph.addEdgeWithWeight(2, 3, 18);

// weightedGraph.addEdgeWithWeight(3, 4, 15);

// weightedGraph.addEdgeWithWeight(4, 0, 17);
// weightedGraph.addEdgeWithWeight(4, 6, 110);

// weightedGraph.addEdgeWithWeight(5, 6, 12);

// console.group(groups.prim);
// prim(weightedGraph);
// console.groupEnd(groups.prim);

// const baz = new UndirectedGraph(7);

// baz.addEdge(0, 1);
// baz.addEdge(1, 2);
// baz.addEdge(1, 5);

// baz.addEdge(2, 0);
// baz.addEdge(2, 3);

// baz.addEdge(3, 4);

// baz.addEdge(4, 0);
// baz.addEdge(4, 6);
// baz.addEdge(5, 6);

// console.group(groups.undirected);
// console.dir(baz.adjacencyList);
// console.group(groups.cyclic);
// console.log(isCyclicUndirected(baz));
// console.groupEnd(groups.cyclic);

// console.groupEnd(groups.undirected);

// const topo = new Graph(7);

// topo.addEdge(0, 1);
// topo.addEdge(1, 2);
// topo.addEdge(1, 5);

// topo.addEdge(2, 3);

// topo.addEdge(3, 4);

// topo.addEdge(4, 6);

// console.group(groups.topological);
// console.dir(topo);
// topologicalSort(topo);
// console.groupEnd(groups.topological);

// const conGraph = new UndirectedGraph(7);

// conGraph.addEdge(0, 1);
// conGraph.addEdge(1, 2);
// conGraph.addEdge(2, 0);

// conGraph.addEdge(3, 4);
// conGraph.addEdge(4, 5);
// conGraph.addEdge(5, 3);

// console.group(groups.connected);
// console.dir(conGraph.adjacencyList);
// console.log(connectedComponents(conGraph));
// console.groupEnd(groups.connected);

// console.group(groups.BFSShortest);
// conGraph.addEdge(2, 4);
// console.dir(conGraph.adjacencyList);
// console.log(shortestPathBFS(0, 5, conGraph));
// console.groupEnd(groups.BFSShortest);

dijkstraDemo();
bellmanFordDemo();
