function Stack () {
    const separator = '★';
    
    this.data = '';
    this.push = function (str) {
        this.data += separator + str;
    };

    this.pop = function() {
        let separatorIndex = this.data.lastIndexOf(separator);
        let result = this.data.slice(separatorIndex + 1);
        this.data = this.data.slice(0, separatorIndex);
        return result;
    };
}

const stack = new Stack();

stack.push('unicorn');
stack.push('star');
stack.push('cat');

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());