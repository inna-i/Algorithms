function swap(arr, left, right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return;
    
    const index = partition(arr, left, right);
    quickSort(arr, left, index - 1);
    quickSort(arr, index, right);
    return arr;
}

function partition(arr, left, right) {
	const pivot = arr[Math.floor((left + right) / 2)];
    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }
    return left;
}

// O(n^2)
// avg - O(n log n)

// let a = [100, 300,20,4,1,500,1000];
// console.log(quickSort(a));

module.exports = quickSort;
