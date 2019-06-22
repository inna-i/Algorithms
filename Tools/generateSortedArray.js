function generateRandomArray(length) {
    return new Array(length).fill(0).map((val, i) => Math.floor(i * 10 + Math.random() * 10));
}

console.log(generateRandomArray(10));

module.exports = generateRandomArray;