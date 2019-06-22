function generateRandomArray(length) {
    const delta = length > 20 ? Math.floor(length / 10) : Math.floor(length / 2);

    return new Array(length).fill(0).map((val, i) => {
        if (i % delta === 0) {
            return -Math.floor(Math.random() * 10);
        }

        return Math.floor(i * 10 + Math.random() * 10);
    });
}

//console.log(generateRandomArray(40));

module.exports = generateRandomArray;