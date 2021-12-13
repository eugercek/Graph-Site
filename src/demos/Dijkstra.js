import { dijkstra } from "../Algorithms";
import WeightedGraph from "../WeightedGraph";

export default function dijkstraDemo() {
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

  console.group("Dijkstra's Algorithm");
  console.dir(graph.adjacencyList);
  const { distanceArray, prevArray } = dijkstra(graph, 0);
  console.log(distanceArray);
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < prevArray.length; i++) {
    console.log(`${prevArray[i]} -> ${i}`);
  }
  console.groupEnd("Dijkstra's Algorithm");
}
