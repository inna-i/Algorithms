// [1,2,3,4,5,6,7,-100,1,10] , n = 3

function maxSum(arr, windowLength) {
    let windowSum = arr
        .slice(0, windowLength)
        .reduce((acc, val) => acc + val);

    let maxSum = windowSum;

    for (let i = windowLength; i < arr.length; i++) {
        windowSum = windowSum + arr[i] - arr[i - windowLength];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
};

console.log(maxSum([1,2,3,4,5,6,7,-100,1,10], 3));

function maxSum2(arr, windowLength) {
    let maxSum = windowSum;

    for (let i = 0; i < arr.length; i++) {
        let windowSum = arr
            .slice(i, windowLength)
            .reduce((acc, val) => acc + val);

        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
};

console.log(maxSum([1,2,3,4,5,6,7,-100,1,10], 3));