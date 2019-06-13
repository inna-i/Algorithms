function insertionSort(array) {
    const len = array.length;

    for(let i=1; i < len; i++) {
        const currentEl = array[i];
        let j = i;

        while(currentEl < array[j-1]) {
            array[j] = array[j-1];
            j--;

        }
        array[j] = currentEl;
    }

    return array;
}


// console.log(insertionSort([]));
// console.log(insertionSort([5]));
// console.log(insertionSort([8, 2]));
// console.log(insertionSort([8, 2, 3, 1, 4, 9]));

module.exports = insertionSort;