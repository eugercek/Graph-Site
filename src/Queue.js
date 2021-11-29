export default class Queue {
  constructor(initialQueue = []) {
    this.queue = initialQueue;
  }

  /**
   *
   * @param {*} item
   */
  enqueue(item) {
    this.queue.push(item);
  }

  /**
   *
   * @returns {*}
   */
  dequeue() {
    return this.queue.shift();
  }

  /**
   *
   * @returns {boolean}
   */
  isEmpty() {
    return this.queue.length === 0;
  }

  /**
   * @returns {*}
   */
  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty!");
    }
    return this.queue[0];
  }
}
