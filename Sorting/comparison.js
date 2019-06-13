const bubbleSort = require('./BubbleSort/bubbleSorting');
const quickSort = require('./QuickSort/quickSort');
const gnomeSort = require('./GnomeSort/gnomeSort');
const insertionSort = require('./InsertionSort/insertionSort');

function generateRandomArray(length) {
    return new Array(length).fill(0).map(() => Math.floor(Math.random()*length));
}

function arraysEquals(array1, array2) {
    return array1.length === array2.length && array1.every((value, index) => value === array2[index])
}

const testData = generateRandomArray(30000);

function analyze(name, fn, array, expected, debug) {
    const testArray = [...array];
    console.log(`----- ${name} ------`);
    console.time(name);

    fn(testArray);

    console.timeEnd(name);
    console.log(`${name} -> valid:`, arraysEquals(expected, testArray) ? '✔' : '✖')

    if (debug) { console.log(testArray) }
    console.log('\n');
}

console.log('\nStart...\n');
const buildInTestData = [ ...testData];
console.time('nativeTimSort');
buildInTestData.sort((a,b) => a - b);
console.timeEnd('nativeTimSort');
console.log('\n');


analyze('bubbleSort', bubbleSort, testData, buildInTestData);
analyze('quickSort', quickSort, testData, buildInTestData);
analyze('gnomeSort', gnomeSort, testData, buildInTestData);
analyze('insertionSort', insertionSort, testData, buildInTestData);

console.log('\Done!\n');

