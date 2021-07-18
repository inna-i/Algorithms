class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.items.length === 0) {
            console.error("Stack is empty");
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
        let str = "Stack: ";

        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i] + " ";
        }

        return str;
    }

}


const stack = new Stack();

console.log(stack.isEmpty());

stack.push(1);

stack.push(2);
stack.push(3);
stack.push(4);

console.log(stack.print());

console.log(stack.peak());

stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack.print());

