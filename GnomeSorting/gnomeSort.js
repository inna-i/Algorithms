
function gnomeSort(array) {
    const len = array.length;
    let i = 0;
    let lastIndex = i;

    while(i < len - 1) {
        if(array[i] > array[i+1]) {
            const temp = array[i];

            array[i] = array[i+1];
            array[i+1] = temp;

            if (i !== 0) {
                i--;
            } else {
                i = lastIndex;
            }
        } else {
            i++;
            lastIndex++;
        }
    }

    return array;

}

// O(n^2)



console.log(gnomeSort([]));
console.log(gnomeSort([5]));
console.log(gnomeSort([8, 2]));
console.log(gnomeSort([8, 2, 3, 1, 4, 9]));