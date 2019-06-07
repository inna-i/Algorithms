const inputArray = [1,1,1,3,4,5,5,6,7,8,9,10,11,11];

function binarySearch(data, arr) {
    let start = 0;
    let end = arr.length;

    while (start < end) {
        let middle = Math.floor(start + (end - start) / 2);
        if (arr[middle] >= data) { end = middle }
        else { start = middle + 1 }
    }

    if (arr[start] === data) {
        return { index: start, data }
    }
}

console.info(binarySearch(1, inputArray));
console.info(binarySearch(2, inputArray));
console.info(binarySearch(5, inputArray));
console.info(binarySearch(11, inputArray));
console.info(binarySearch(120, inputArray));
