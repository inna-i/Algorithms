function swap(arr, a, b) {
    [arr[b], arr[a]] = [arr[a], arr[b]];
}

function partition(arr, start = 0, end = arr.length - 1) {
	let pivot = arr[Math.floor((start+end)/2)];
	let left = start;
	let right = end;
	
	while(left < right) {
        while(arr[left] < pivot) { left++ }
        while(arr[right] > pivot) { right-- }

        if(left < right) {
            swap(arr, left, right);
            left++;
            right--;
        }
	}

	return right;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
	if (end - start < 1) return arr;
	const p = partition(arr, start, end)
	quickSort(arr, start, p);
	quickSort(arr, p + 1, end);

	return arr;

}

// O(n^2)
// avg - O(n log n)

let a = [100, 300,20,4,1,500,1000];

console.log(quickSort(a));
