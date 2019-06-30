/**
 *  The (binary) heap data structure is an array object that we can view 
 *  as a nearly complete binary tree.
 *  Each node of the tree corresponds to an element of the array.
 *  
 */

 /**
  * Our constructor that accepts init array 
  * @param {*} data 
  */
function Heap(data = []) {
	this.data = data;
	this.size = data.length;

	if (data.length > 1) {
		this.buildMaxHeap();
	}
}

Heap.prototype = {
	swap: function(i, j) {
		let temp = this.data[i];
		this.data[i] = this.data[j];
		this.data[j] = temp;
	},

	/**
	 * In order to maintain the max-heap property, we call the procedure MAX-HEAPIFY.
	 * Its inputs are an array A and an index i into the array. When it is called, 
	 * MAXHEAPIFY assumes that the binary trees rooted at LEFT.i / and RIGHT.i / are maxheaps, 
	 * but that A[i] might be smaller than its children, thus violating the max-heap
     * property. MAX-HEAPIFY lets the value at A[i] “float down” in the max-heap so
     * that the subtree rooted at index i obeys the max-heap property.
	 * @param {*} i 
	 */
	maxHeapify: function(i) {
		let leftIdx = 2*i + 1;
		let rightIdx = 2*i + 2;
		let largest = i;

		if ( leftIdx < this.size && this.data[leftIdx] > this.data[largest]) {
			largest = leftIdx;
		}

		if (rightIdx < this.size && this.data[rightIdx] > this.data[largest]) {
			largest = rightIdx;
		}

		if (largest !== i) {
			this.swap(largest, i);
			this.maxHeapify(largest);
		}
	},

	/**
	 * We can compute a simple upper bound on the running time of BUILD-MAXHEAP as follows. 
	 * Each call to MAX-HEAPIFY costs O(lg n) time, and BUILDMAX-HEAP makes O(n) such calls. Thus, the running time is O(n lg n)
	 */
	buildMaxHeap: function() {
		for(let i = Math.floor(this.size / 2); i >= 0; i--) {
			this.maxHeapify(i);
		}
	},

	bubbleUp: function() { 
		let curIdx = this.size - 1;	

		while(curIdx > 0) { // O(log(n)) as we deviding parent index by 2 every iteration
			let parentIdx = Math.floor((curIdx - 1)/ 2);
			let lastVal = this.data[curIdx];	
			let parentData = this.data[parentIdx];
			
			if (parentData >= lastVal) { return; }
			else {
				this.data[parentIdx] = lastVal;
				this.data[curIdx] = parentData;
				curIdx = parentIdx;
			}
		}
	},

	push: function(val) {
		this.data.push(val);
		this.size++;
		this.bubbleUp();
	},

	decrementSize: function() { this.size--; },

	print: function() { console.log(this.data) }
}

/*

const heap = new Heap();

heap.push(20);
heap.push(10);
heap.push(30);
heap.push(1);
heap.push(100);

heap.print();

Output: 
[ 100, 30, 20, 1, 10 ]

The tree looks like:

   100
   / \
  30 20
 / \
1  10

*/


module.exports = Heap;
