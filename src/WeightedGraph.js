/* eslint-disable no-plusplus */

/**
 * Uses Adjacency List
 */
export default class WeightedGraph {
  constructor(size) {
    this.size = size;

    this.adjacencyList = Array.from(Array(this.size), () => []);
  }

  addEdgeWithWeight(from, to, weight) {
    this.adjacencyList[from].push({ to, weight });
  }

  toString() {
    console.dir(this.adjacencyList);
  }
}
