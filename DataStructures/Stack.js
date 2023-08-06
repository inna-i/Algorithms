class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);

        return this;
    }

    pop() {
        if (this.items === 0) {
            console.error("The Stack is empty");
            return null;
        }

        return this.items.pop();
    }

    peak() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0; 
    }

    print() {
        return this.items.join(', ');
    }
}

// LIFO
const stack = new Stack();

stack.push(1).push(2).push(3).push(10);

console.log(stack.print());

stack.pop();
stack.push(333);

console.log(stack.peak())

console.log(stack.print());
