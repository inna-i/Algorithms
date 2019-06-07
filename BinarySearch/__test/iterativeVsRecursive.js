const createSortedArray = n => Array.from(new Array(n), (_, i) => 10 * i + Math.floor(Math.random() * 10));

const inputArray = createSortedArray(3000);

function binarySearch (n, array) {
	let start = 0;
	let end = array.length;

	while(start < end) {
		const middleIndex = Math.floor(start + (end - start) / 2);
		if (array[middleIndex] === n) {
			return { n, index: middleIndex }
		}

		if (array[middleIndex] > n) {
			end = middleIndex - 1;
		} else {
			start = middleIndex + 1;
		}
	}

	return null;
}

function binarySearchRecursive (n, array, start = 0, end = array.length) {
	if(start === end) {
		return null;
	}

	const middle = Math.floor((start + end)/2);

	if(array[middle] === n) {
		return { n, index: middle }
	} else if (array[middle] > n) {
		return binarySearchRecursive(n, array, start, middle - 1)
	} else {
		return binarySearchRecursive(n, array, middle + 1, end)
	}
}

console.time('binary');
console.log(binarySearch(500, inputArray));
console.timeEnd('binary');

console.time('binaryRecursive');
console.log(binarySearchRecursive(500, inputArray));
console.timeEnd('binaryRecursive');