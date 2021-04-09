const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.root = new ListNode(null);
  }

  get size() {
    let counter = 0;
    let currentNode = this.root;
    if (currentNode.value !== null) {
      counter++;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
        counter++;
      }
    }
    return counter;
  }

  enqueue(element) {
    let currentNode = this.root;
    if (currentNode.value === null) {
      currentNode.value = element;
    } else {
      const node = new ListNode(element);
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  dequeue() {
    if (this.root.value !== null) {
      const prevNode = this.root;
      this.root = this.root.next;
      return prevNode.value;
    }
    return null;
  }
}

module.exports = Queue;
