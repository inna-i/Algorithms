function merge(arr, start1, start2, delta) {
    const result = [];

    let i = start1;
    let j = start2;
    let end1 = start1 + delta;
    let end2 = start2 + delta;

    if (end2 > arr.length) {
        end2 = arr.length;
    }

    if (end1 > arr.length) {
        end1 = arr.length;
    }
    
    while(i < end1 && j < end2) {
        if (arr[i] < arr[j]) {
            result.push(arr[i++]);
        } else {
            result.push(arr[j++]);
        }
    }

    while(i < end1) result.push(arr[i++]);
    while(j < end2) result.push(arr[j++]);

    for(let z = 0; z < result.length; z++) {
        arr[start1 + z] = result[z];
    }
}

function sort(arr) {    
    if (arr.length < 2) { return arr }

	for (let i = 1; i < arr.length; i *= 2) {
		for (let j = 0; j < arr.length; j += 2 * i) {
			merge(arr, j, j + i, i);
		}
	}

    return arr;
}

// console.log(sort([2, 1, 3]))
//console.log(sort([1,2,3,4,5,6]))

module.exports = sort;