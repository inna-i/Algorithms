module.exports = {
    swap: function(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp; 
    }
}