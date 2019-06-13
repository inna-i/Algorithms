const bubbleSort = require('./BubbleSort/bubbleSorting');
const quickSort = require('./QuickSort/quickSort');
const gnomeSort = require('./GnomeSort/gnomeSort');
const insertionSort = require('./InsertionSort/insertionSort');

function generateRandomArray(length) {
    return new Array(length).fill(0).map(() => Math.floor(Math.random()*length));
}

const testData = generateRandomArray(500);
const quickSTestData = [...testData];
const gnomeSTestData = [...testData];
const insertionSTestData = [...testData];
const buildInTestData = [...testData];


console.time('bubbleSort');
bubbleSort(testData);
console.timeEnd('bubbleSort');


console.time('quickSort');
quickSort(quickSTestData);
console.log(quickSTestData);
console.timeEnd('quickSort');


console.time('gnomeSort');
gnomeSort(gnomeSTestData);
console.timeEnd('gnomeSort');


console.time('insertionSort');
insertionSort(insertionSTestData)
console.timeEnd('insertionSort');


console.time('nativeTimSort');
buildInTestData.sort((a,b) => a < b);
console.timeEnd('nativeTimSort');


