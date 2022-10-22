/**
 * Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, Clifford Stein - Introduction to Algorithms, Third Edition - 2009
 * Section 7.1
 * 
 * The quicksort algorithm has a worst-case running time of O(n^2) on an input array of nnumbers. 
 * Despite this slow worst-case running time,quicksort is of ten the best practical choice for sorting
 * because it is remarkably efﬁcient on the average: its expected running time is O(log(n)), and the constant 
 * factors hidden in the O(log(n)) notation are quite small. 
 */

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

// [1, 100, 10, 1000, 20]

function partition(arr, left = 0, right = arr.length - 1) {
    let pivot = arr[right];
    let i = left - 1;
    let j;

    for (j = left; j < right; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    swap(arr, i + 1, right);
    return i + 1;
}

function quickSortCormen(arr, left = 0, right = arr.length - 1) {
    if (left >= right) return arr;
    const p = partition(arr, left, right);
    quickSortCormen(arr, left, p - 1);
    quickSortCormen(arr, p + 1, right);
    return arr;
}

module.exports = quickSortCormen;