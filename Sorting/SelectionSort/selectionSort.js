function sort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let curr = arr[i];
        let min = i;
        for(let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j; 
        }
        if (min !== i) {
            arr[i] = arr[min];
            arr[min] = curr;
        } 
    }
    return arr;
}

// console.log(sort([]))
// console.log(sort([1]))
// console.log(sort([1,7,1,0, 200, -1]))

module.exports = sort;
