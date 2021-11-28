export default class Graph {
  constructor(size) {
    this.size = size;

    this.adjacencyList = Array.from(Array(this.size), () => []);
  }

  addEdge(from, to) {
    this.adjacencyList[from].push(to);
  }

  toString() {
    // eslint-disable-next-line no-console
    console.table(this.adjacencyList);
  }
}
