function isAnnagram(word1, word2){
    const arr = word1.split('');
    if(word1.length !== word2.length) {
        return false;
    }

    for(let i = 0; i < arr.length; i++) {
        if(!word2.includes(arr[i])) {
            return false;
        }
    }

    return true;
}

function isAnagram2(word1, word2) {
    return word1.split('').sort().join('') === word2.split('').sort().join('');
}

function count(num) {
    return String(num)
        .split('')
        .reduce((acc, val) => {
            acc[val] = acc[val] === undefined ? 1 : acc[val] + 1;
            return acc;
        }, {})
}

//['a', 'a', 'b'] => { a: 2, b: 1 }
function compare(obj1, obj2) {
    return Object
        .keys(obj1)
        .every(key => obj1[key] === obj2[key])
}

function isAnagram3(word1, word2) {
    const count1 = count(word1);
    const count2 = count(word2);
    return compare(count1, count2)
}

function isAnagram4(num1, num2){ 
    const count1 = count(num1);
    const count2 = count(num2);
    return compare(count1, count2)
}

// 123 321
console.log(isAnagram4(123, 321))