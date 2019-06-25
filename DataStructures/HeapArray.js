/**
 *  The (binary) heap data structure is an array object that we can view 
 *  as a nearly complete binary tree.
 *  Each node of the tree corresponds to an element of the array.
 *  
 */

function Heap() {
	this.data = [];

	this.print = function() { console.log(this.data) }
	
	this.balance = function() { 
		let curIdx = this.data.length - 1;	

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
	}	

	this.push = function(val) {
		this.data.push(val);
		this.balance();
	}
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
