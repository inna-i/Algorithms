function numberOfDigits(num) { // O(1)
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function getDigit(num, pos) { // O(1)
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10
}

function mostDigits(arr = []) { // O(n)
    return arr.reduce((max, cur) => Math.max(max, numberOfDigits(cur)), 0)
}

/**
 * O(nk) - where n - nuber of elements in array, k - max number of digits
 * @param {*} arr 
 */
function sort(arr) {  
    const min = Math.min.apply(Math, arr);  // O(n)
    if (min < 0) { 
        let diff = Math.abs(min);
        for(let i = 0; i < arr.length; i++) arr[i] = arr[i] + diff;  // O(n)
    }

    const timesToLoop = mostDigits(arr);  // O(n)

    for(let index = 0; index < timesToLoop; index++) {
        const buckets = Array.from({ length: 10 }, () => []);

        for(let i = 0; i < arr.length; i++) {
            buckets[getDigit(arr[i], index)].push(arr[i])
        }

        let k = 0;
        for(let j = 0; j < 10; j++) {  // O(n)
            for(let b = 0; b < buckets[j].length; b++) {
                arr[k++] = buckets[j][b];
            }
        }
    }

    if (min < 0) { // O(n)
        for(let i = 0; i < arr.length; i++) arr[i] = arr[i] + min;
    }

    return arr;
}

// console.log(sort([]))
// console.log(sort([1]))
// console.log(sort([1, 1]))
// console.log(sort([0, 0, 700, -100, -700]))
// console.log(sort([100,1,2,0, 200, 3, -1]))

module.exports = sort;
