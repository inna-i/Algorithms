function merge(left, right) {
	let i = 0, j = 0;
	let res = [];

	while(i < left.length && j < right.length ) {
		if (left[i] < right[j]) {
			res.push(left[i++]);
		} else {
			res.push(right[j++]);
		}		
	}

	while ( i < left.length) res.push(left[i++]);
	while ( j < right.length) res.push(right[j++]);

	return res;
}

function mergeSort(arr) {
	if (arr.length < 2) return arr;
	let middle = Math.floor(arr.length / 2);
	
	return merge(
		mergeSort(arr.slice(0, middle)),
		mergeSort(arr.slice(middle))
	)
}

console.log(mergeSort([5,6,1,2,3,4]));

/*
 [5,6,1,2,3,4] 
 middle = 3

merge(
	mergeSort([5,6,1]),
	mergeSort([2,3,4])
)
	arr 1
	middle = 1

	merge(
		mergeSort([5,6]),
		mergeSort([6,1])
	)	
	
	arr 2
	middle = 1

	merge(
		mergeSort([2,3]),
		mergeSort([3,4])
	)

*/
module.exports = mergeSort;