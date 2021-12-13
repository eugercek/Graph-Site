export default class PriorityQueue {
  constructor() {
    this.arr = [];
  }

  /**
   * This will e O(logn) in future O(1) now to
   */
  enqueue({ node, dist }) {
    this.arr.push({ node, dist });
  }

  /**
   * This is not O(logn) :(
   */
  dequeue() {
    let minIndex = 0;
    let minDist = this.arr[0].dist;

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i].dist < minDist) {
        minIndex = i;
        minDist = this.arr[i].dist;
      }
    }

    const minElement = this.arr.splice(minIndex, 1)[0];
    return { node: minElement.node, dist: minElement.dist };
  }

  toString() {
    this.arr.forEach((o) => {
      console.log(`${o.node}  (${o.dist})`);
    });
  }

  empty() {
    return this.arr.length === 0;
  }
}
