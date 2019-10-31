function linearSearchRecursive(arr, val, startIndex = 0, index = arr.length-1) {
    if(arr[startIndex] === val) {
        return val;
    }

    if(arr[index] === val) {
        return val;
    }

    return linearSearchRecursive(arr, val, startIndex+1, index-1);
};


// [1,2,3,45,4] -> 4
console.log(linearSearchRecursive([1,2,3,45,4], 4));
