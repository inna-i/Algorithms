const tasks = [
    {
        id: '1000thMissingNumber',
        task: `Given an array with unique numbers from 1 to 1000 unsorted.\nOne number is missing (array size 999). Find the missing number!\nAdvanced: there are 2 missing numbers, find them.`,
        solved: false,
    },
    {
        id: 'sameFrequency',
        task: `Given two positive integers, find out if the two numbers have the same frequency of digits. 123, 312 => true; 123, 111 => false`,
        solved: false,
    },
    {
        id: 'areDuplicates',
        task: `Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.`,
        solved: false,
    },
];

tasks
    .filter(task => !task.solved)
    .sort(() => Math.random() * 2 - 1)
    .concat({ id: 'OK', task: 'All tasks are done!' })
    .slice(0, 1)
    .map(task => ({ get: fn => fn(task) }))
    .pop()
    .get(task => {
        console.log(task.id);
        console.log(task.task);
    })