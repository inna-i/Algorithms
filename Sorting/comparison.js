/**
 *  To increase call stack size: node --stack-size=10000000 Sorting/comparison.js 50000
 */

const bubbleSort = require('./BubbleSort/bubbleSorting');
const quickSort = require('./QuickSort/quickSort');
const quickSortCormen = require('./QuickSort/quickSortCormen');
const mergeSort = require('./MergeSort/mergeSort');
const mergeSortIterative = require('./MergeSort/mergeSortIterative');
const gnomeSort = require('./GnomeSort/gnomeSort');
const insertionSort = require('./InsertionSort/insertionSort');
const countingSort = require('./CountingSort/countingSort');

const arraysEquals = require('../Tools/arraysEquals');
const generateRandomArray = require('../Tools/generateRandomArray');
const generateSortedArray = require('../Tools/generateSortedArray');
const generateAlmostSortedArray = require('../Tools/generateAlmostSortedArray');

const nativeSort = function(arr) {
    return arr.sort((a, b) => a - b);
}

function performCheckOn(name, fn, inputArrays, compareArrays = {}) {
    console.info(`--- checking ${name} ---`)
    return Object.keys(inputArrays).reduce((results, key) => {
        let testArray = [ ...inputArrays[key]];
        console.time(key);

        try {
            testArray = fn(testArray);
        } catch (e) {
            console.error(`\n${key} ✖ Error!`, e.message)
            testArray = ['invalid'];
        }
        
        console.timeEnd(key);

        results[key] = testArray;

        if (compareArrays[key] && !arraysEquals(compareArrays[key], testArray)) {
            console.log(`✖ invalid resut of ${key}`);
        }
      
        return results;
    }, {})
}

function analyze(fns, size) {
    console.info(`\nStarting comparison on ${size} integer elements...`);
    const testDataRandom = generateRandomArray(size);
    const testDataSorted = generateSortedArray(size);
    const testDataAlmostSorted = generateAlmostSortedArray(size);

    const inputArrays = { A: testDataRandom, B: testDataSorted, C: testDataAlmostSorted };

    console.info(`Performing native JS sort for future comparisons...`)
    console.info(`A - fully random \nB - sorted\nC - almost sorted\n\n`)

    const compareArrays = performCheckOn(
        'Native JS Tim sort',
        nativeSort,
        inputArrays,
    );

    console.info('Starting comparison... \n')

    Object
        .keys(fns)
        .forEach(key => {
            performCheckOn(key, fns[key], inputArrays, compareArrays);
            console.log('\n');
        })

    console.info('Done!')
}

const getSize = defaultSize => {
    const args = process.argv.slice(2);
    
    if (args.length > 0) {
        const fromCmd = Number(args[0]);
        if (isNaN(fromCmd)) {
            return defaultSize;
        }
        return fromCmd;
    }

    return defaultSize;
}

analyze({
    bubbleSort,
    quickSort,
    quickSortCormen,
    mergeSort,
    mergeSortIterative,
    gnomeSort,
    insertionSort,
    countingSort
}, getSize(1000));