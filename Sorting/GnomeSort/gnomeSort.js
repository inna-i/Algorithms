function gnomeSort(arr) {
    let i = 0;
    while (i < arr.length - 1) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            if (i !== 0) i--;
        } else {
            i++;
        }
    }
    return arr;
}

// O(n^2)


// console.log(gnomeSort([]));
// console.log(gnomeSort([5]));
// console.log(gnomeSort([8, 2]));

module.exports = gnomeSort;
