function generateRandomArray(length) {
    return new Array(length).fill(0).map(() => Math.floor(Math.random()*length));
}

module.exports = generateRandomArray;