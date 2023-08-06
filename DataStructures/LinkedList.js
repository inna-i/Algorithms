class Node {
	constructor(value, next) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	getNode(index) {
		if (index < 0) return 0;
		if (index === 0 && this.head) return this.head;

		let currentNode = this.head;
		while (index > 0 && currentNode && currentNode.next) {
			currentNode = currentNode.next;
			index--;
		}

		if (index !== 0) {
			return null;
		}
		return currentNode;
	}

	get(index) {
		return this.getNode(index).value;
	}

	push (value) {
		if (!this.head) {
			this.head = new Node(value);
			this.tail = this.head;
			return this;
		}

	   this.tail.next = new Node(value);
	   this.tail = this.tail.next;

	   return this;
	}

	pop () {
		if (!this.head) {
			return null;
		}

		if (!this.head.next) {
			const temp = this.head.value;
			this.head = this.tail = null;
			return temp;
		}

		let currentNode = this.head;

		while(currentNode.next.next !== null) {
			currentNode = currentNode.next;
		}

		const temp = this.tail.value;
		this.tail = currentNode;
		currentNode.next = null;

		return temp;
	}

	remove (index) {
		const prev = this.getNode(index - 1);
		const current = this.getNode(index);

		if (prev && current && current.next) {
			prev.next = current.next;
		} else if (!prev && current) {
			this.head = current.next;
		}

		return current;
	}

	shift () {
		if(this.head) {
			const temp = this.head.value;
			if (this.head.next === null) {
				this.tail = null;
			}
			this.head = this.head.next;
			return temp;
		} 

		return null;
	}

	unshift(value) {
		const newNode = new Node(value);
		newNode.next = this.head;
		this.head = newNode;
		return this;
	}

	toString() {
		let result = '';
		let current = this.head;
		while(current) {
			result += `${current.value}${current.next ? ', ' : ''}`;
			current = current.next;
		}
		return result;
	}
}

const list = new LinkedList();
list.push(1).push(2).push(3).push(4);

console.log(list.toString());

console.log(list.remove(1));
// console.log(list.toString());
// console.log(list.remove(0));
// console.log(list.toString());
// console.log(list.remove(333));
// console.log(list.toString());

