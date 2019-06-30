const { swap } = require('../utils.js');

function sort(arr) {
     
     for (let left = 0, right = arr.length - 1; left < right; left++, right--) {
        let swapped = false;
        for(let i = left; i <= right - 1; i++ ) {
            if (arr[i] > arr[i + 1] ) { swap(arr, i, i+1); swapped = true; }
        }
        
        for (let i = right; i >= left + 1; i-- ) {
            if (arr[i] < arr[i - 1]) { swap(arr, i, i - 1); swapped = true; }
        }

        if (!swapped) {
            break;
        }
    }

    return arr;
}

// console.log(sort([]))
// console.log(sort([1]))
// console.log(sort([1,10,2,100,0,-1, 1]))

module.exports = sort;