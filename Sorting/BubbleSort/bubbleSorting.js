function bubbleSorting(array) {
	let isSorted = false;
	let lastUnsorted = array.length - 1;
   
	while(!isSorted) {
		isSorted = true;

		for (let i =0; i < lastUnsorted; i++) {
			if(array[i] > array[i+1]) {
				[array[i],array[i+1]] = [array[i+1], array[i]];
				isSorted = false;
			}
		}

		lastUnsorted--;
	}
	return array;
}

const inputArray =  [2,50,1,23,12,34,33];

console.log(bubbleSorting(inputArray));
