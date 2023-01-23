class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}


const queue = new PriorityQueue();

queue.enqueue(1);
queue.enqueue(2);

module.exports = PriorityQueue;
  