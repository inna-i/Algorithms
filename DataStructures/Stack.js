class Stack {
  constructor() {
    this.items = [];
  }

  // Add new element to the end
  push(element) {
    this.items.push(element);

    return this;
  }

  // remove he last element
  pop() {
    if (this.isEmpty()) {
      console.warn('Array is empty');
      return null;
    }

    return this.items.pop();
  }

  // get the last element
  peek() {
    if (this.isEmpty()) {
      console.warn('Array is empty');
      return null;
    }
    return this.items.at(-1);
  }

  isEmpty() {
    return this.items.length === 0;
  }

  toString() {
    return this.items.join(', ');
  }
}

// LIFO => Last in Last Out
const stack = new Stack();
console.log(stack.isEmpty());

stack.push(1).push(2).push(3).push(10);

console.log(stack.toString());

console.log(stack.pop());
stack.push(333);
console.log(stack.peek());
console.log(' after pop  ', stack.toString());
console.log(stack.toString());
