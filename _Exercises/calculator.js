function isNum(str) {
    return str.match(/^-?[0-9]+$/g);
}

function search(arr, sign, except) {
    let brackets = 0;
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === '(') brackets++;
        if (arr[i] === ')') brackets--;
        if (arr[i] === sign && brackets === 0 && i !== except) return i;
    }
    return -1;
}

function calculate(formula, arr = formula.split('')) {
    if (isNum(formula)) {
        return Number(formula);
    }

    const indexOfPlus = search(arr, '+');

    if (indexOfPlus > 0) {
        return calculate(formula.slice(0, indexOfPlus)) + calculate(formula.slice(indexOfPlus + 1))
    }
    
    const indexOfMinus = search(arr, '-', 0);

    if (indexOfMinus > 0) {
        return calculate(formula.slice(0, indexOfMinus)) + calculate(formula.slice(indexOfMinus))
    }

    const indexOfMult = search(arr, '*');

    if (indexOfMult > 0) {
        return calculate(formula.slice(0, indexOfMult)) * calculate(formula.slice(indexOfMult + 1))
    }

    const indexOfDiv = search(arr, '/');

    if (indexOfDiv > 0) {
        return calculate(formula.slice(0, indexOfDiv)) / calculate(formula.slice(indexOfDiv + 1))
    }

    const indexOfPow = search(arr, '^');
    if (indexOfPow > 0) {
        return Math.pow(calculate(formula.slice(0, indexOfPow)), calculate(formula.slice(indexOfPow + 1)))
    }

    if(arr[0] === '(' && arr[arr.length - 1] === ')') return calculate(formula.slice(1, formula.length - 1))

    if (arr[0] === '-') return -calculate(formula.slice(1))

    return 0;
}

console.log(calculate('2')); // 2
console.log(calculate('2^2')); // 4
console.log(calculate('(2+2)^2+(1+1)^3')); // 24
console.log(calculate('(2+2)^2*2+(1+1)^3')); // 40
console.log(calculate('2*(1+1)+(2+2)')); // 8
console.log(calculate('-2')); // -2
console.log(calculate('-(1-3)')); // 2
console.log(calculate('2+2')); // 4
console.log(calculate('2+2-3')); // 1
console.log(calculate('2+2*5/2')); // 7
console.log(calculate('(2+2)*5')); // 20
console.log(calculate('(2+2)/4')); // 1
console.log(calculate('(2-1)*100')); // 100
console.log(calculate('(1+2*100-56*(1+3-2)-2*1)*(1+2)-1')); // 260
console.log(calculate('1-1-1')); // -1