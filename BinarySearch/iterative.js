const inputArray = [1,3,4,5,6,7,8,9,10,11];

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

 console.info(binarySearch(1, inputArray));
 console.info(binarySearch(2, inputArray));
 console.info(binarySearch(5, inputArray));
 console.info(binarySearch(11, inputArray));
 console.info(binarySearch(120, inputArray));