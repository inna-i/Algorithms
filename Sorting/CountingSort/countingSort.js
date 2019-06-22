function sort(arr) {
    if (arr.length < 2) { return arr }
    
    let min = Infinity, max = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] > max) { max = arr[i] }
        if (arr[i] < min) { min = arr[i] }
    }

    const size = max - min + 1;
    const temp = new Array(size).fill(0);

    for (let i = 0; i < arr.length; i++) {
        temp[arr[i] - min]++;
    }

    let j = 0;
    for(let i = 0; i < temp.length; i++) {
        let n = temp[i];
        while(n > 0) {
            arr[j++] = i + min;
            n--;
        }
    }

    return arr;
} 

// console.log(sort([]))
// console.log(sort([5]))
// console.log(sort([5, 1]))
// console.log(sort([5, 1, 2, 0, 100]))
// console.log(sort([5, -1, 1, 1, 100]))

module.exports = sort;