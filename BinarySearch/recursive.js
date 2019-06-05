const inputArray = [1,3,4,5,6,7,8,9,10,11];

function binarySearch (n, array, start = 0, end = array.length) {
	if(start === end) {
		return null;
	}

	const middle = Math.floor((start + end)/2);

	if(array[middle] === n) {
		return { n, index: middle }
	} else if (array[middle] > n) {
		return binarySearch(n, array, start, middle - 1)
	} else {
		return binarySearch(n, array, middle + 1, end)
	}
 }

 console.info(binarySearch(1, inputArray));
 console.info(binarySearch(2, inputArray));
 console.info(binarySearch(5, inputArray));
 console.info(binarySearch(11, inputArray));
 console.info(binarySearch(120, inputArray));