// arr = [1,8,4,1,2,3], sum >= 12

function minSumWindow(arr = [], sum = 0) {

    let right = 0;
    let left = 0;
    let currentSum = 0;
    let dist = Infinity;

    while(left < arr.length && !(right === arr.length && currentSum < sum)) {

        if(currentSum < sum) {
            currentSum += arr[right++];
        }

        if(currentSum >= sum) {
            dist = Math.min(dist, right - left);
            currentSum -= arr[left++];
        }
    }

    return dist;
}

console.log(minSumWindow([1,8,4,1,2], 12));