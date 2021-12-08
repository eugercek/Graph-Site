/* eslint-disable no-plusplus */
export default class WeightedGraph {
  constructor(size) {
    this.size = size;
    this.adjacencyMatrix = new Array(size);

    for (let i = 0; i < this.adjacencyMatrix.length; i += 1) {
      this.adjacencyMatrix[i] = new Array(size).fill(0);
    }
  }

  addEdgeWithWeight(from, to, weight) {
    this.adjacencyMatrix[from][to] = weight;
    this.adjacencyMatrix[to][from] = weight;
  }

  toString() {
    console.table(this.adjacencyMatrix);
  }

  createAdjacencyList() {
    this.adjacencyList = Array.from(Array(this.size), () => []);

    for (let i = 0; i < this.adjacencyMatrix.length; i++) {
      for (let j = 0; j < this.adjacencyMatrix[i].length; j++) {
        if (this.adjacencyMatrix[i][j] !== 0) {
          this.adjacencyList[i].push(j);
        }
      }
    }
  }

  printAdjacencyList() {
    console.table(this.adjacencyList);
  }
}
