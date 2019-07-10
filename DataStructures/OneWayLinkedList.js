class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class List {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(data) {
        const entry = new Node(data);
        if (!this.head) { this.head = this.tail = entry }
        else {
            this.tail.next = entry;
            this.tail = entry;
        }
        this.length++;
        return this;
    }

    get(idx) {
        if(this.length === 0 || this.length < idx || idx < 0) { return null }
        let result = this.head;
        while(idx > 0) { result = result.next; idx--; }
        return result;
    }

    remove(idx) {
        if(this.length === 0 || this.length < idx || idx < 0) { return null }
        let prev = this.get(idx - 1);
        if(!prev) {
            console.log('poopping')
            return this.shift();
        }
        let res = prev.next;
        prev.next = res && res.next;
        this.length--;
        return res;
    }

    shift() {
        if(this.length === 0) { return null }
        
        let res = this.head;
        this.head = res.next;
        
        if(--this.length === 0) {
            this.tail = null;
        }

        return res;
    }

    pop() {
        let res = this.head;
        if(this.length === 0) { 
            return res; 
        } else if(this.length === 1) {
            this.head = this.tail = null;    
        } else { 
            let prev = this.get(this.length - 2);
            res = prev.next;
            prev.next = null;
            this.tail = prev;
        }

        this.length--;
        return res; 
    }

    reverse() {
        let prev = null;
        let curr = this.tail = this.head;

        while(curr !== null) {
            let realNext = curr.next;
            curr.next = prev;
            prev = curr;
            curr = realNext;
        }

        this.head = prev;
    }

    toArray() {
        const res = [];
        for(let e = this.head; e !== null; e = e.next) {
            res.push(e.data);
        }
        return res;
    }

    toString() {
        return this.toArray().toString();
    }

}

const list = new List();

list.push(1)
    .push(2)
    .push(3);

console.log(list.toString()); // should print 1,2,3
console.log(list.reverse());
console.log(list.toString());
console.log(list.remove(2));
console.log(list.toString());
console.log(list.shift());
console.log(list.toString());
