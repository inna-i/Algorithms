const createSortedArray = n => Array.from(new Array(n), (_, i) => 10 * i + Math.floor(Math.random() * 10));

const inputArray = createSortedArray(10000);

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

const binarySearch2 = (n, array) => {
    let start = 0;
    let end = array.length;
  
    while(start < end) {
      const middleIndex = Math.floor((start + (end - start) / 2));
  
      if (array[middleIndex] === n) {
        if (array[middleIndex - 1] === n) {
          end = middleIndex;
          continue;
        }
        else {
          return { index: middleIndex, n };
        }
      } else if (array[middleIndex] > n) {
        end = middleIndex - 1;
      } else {
        start = middleIndex + 1;
      }
    }
  
    return null;
  }
  

console.time('binary');
console.log(binarySearch(500, inputArray));
console.timeEnd('binary');

console.time('binary2');
console.log(binarySearch2(500, inputArray));
console.timeEnd('binary2');