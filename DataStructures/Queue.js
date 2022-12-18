function Queue() {
    this.values = [];

    this.enqueue = (val) => {
        this.values.push(val);
    }
    this.dequeue = () => {
        return this.values.shift();
    }
}

Queue.prototype.print = function() {
    return this.values.reduce((acc, curr) => {
        acc += curr + ', ';

        return acc;
    }, 'Queue: ');
}

// First In First Out - FIFO

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.print());

