function sort(arr) {
    if (arr.length < 2) { return arr }

    const max = Math.max.apply(Math, arr);
    return arr
        .reduce((count, element) => {
            count[element]++;
            return count;
        }, new Array(max + 1).fill(0))
        .reduce((acc, element, i) => {
            if (element > 0) {
                for(let j = 0; j < element; j++) {
                    acc.push(i);
                }
            }
            return acc;
        }, [])
} 

// console.log(sort([]))
// console.log(sort([5]))
// console.log(sort([5, 1]))
// console.log(sort([5, 1, 2, 0, 100]))
// console.log(sort([5, 1, 1, 1, 100]))

module.exports = sort;