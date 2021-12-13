/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import { bellmanFord } from "../Algorithms";
import WeightedGraph from "../WeightedGraph";
import { printDistanceAndPrevArray } from "../util";

export default function bellmanFordDemo() {
  const graph = new WeightedGraph(7);

  graph.addEdgeWithWeight(0, 1, 2);
  graph.addEdgeWithWeight(1, 2, 3);
  graph.addEdgeWithWeight(1, 5, 1);

  graph.addEdgeWithWeight(2, 0, 1);
  graph.addEdgeWithWeight(2, 3, 8);

  graph.addEdgeWithWeight(3, 4, 5);

  graph.addEdgeWithWeight(4, 0, 7);
  graph.addEdgeWithWeight(4, 6, 10);

  graph.addEdgeWithWeight(5, 6, 2);

  console.group("Bellman Ford's Algorithm");

  console.group("No Negative Cycle");
  graph.print();
  printDistanceAndPrevArray(bellmanFord(graph, 0));
  console.groupEnd("No Negative Cycle");

  console.group("Negative Cycle");
  graph.addEdgeWithWeight(6, 1, -10);
  graph.print();
  try {
    printDistanceAndPrevArray(bellmanFord(graph, 0));
  } catch (error) {
    console.log("There is negative cycle!");
  }
  console.groupEnd("Negative Cycle");

  console.groupEnd("Bellman Ford's Algorithm");
}
