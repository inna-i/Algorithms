const Heap = require('../../DataStructures/HeapArray');

/**
 * O(n lg(n))
 * @param {*} arr 
 */
function sort(arr) {
    const heap = new Heap(arr); // O(n lg(n))
    
    for(let i = arr.length - 1; i > 0; i--) {
        heap.swap(0, i); // O(1)
        heap.decrementSize(); // O(1)
        heap.maxHeapify(0); // O(lg(n))
    }

    return arr;
}


// console.log(sort([]));
// console.log(sort([1]));
// console.log(sort([4, 2, 100, 0]));
// console.log(sort([1, 1, 100, 0]));

module.exports = sort;