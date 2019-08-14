function isNum(string) {
    return string.match(/^-?\d+$/g);
}

function findOperatorIndex(exp, operator, start = 0) {
    let count = 0;
    for (let i=start; i < exp.length; i++) {
        if (exp[i] === '(') {
            count++;
        }
        if (exp[i] === ')') {
            count--;
        }

        if(exp[i] === operator && count === 0) {
            return i;
        }

    }
    return -1;
    
}


function calcurator(exp) {
    if (isNum(exp)) {
        return Number(exp);
    } 

    const plusInd = findOperatorIndex(exp, '+');

    if (plusInd > -1 ) {
        return calcurator(exp.slice(0, plusInd)) + calcurator(exp.slice(plusInd + 1));
    }

    const minusIdx = findOperatorIndex(exp, '-', 1);

    if (minusIdx > 0 ) {
        // console.log('minus ', calcurator(exp.slice(minusIdx + 1)));
        return calcurator(exp.slice(0, minusIdx)) + calcurator('-' + exp.slice(minusIdx + 1));
    }

    const multInd = findOperatorIndex(exp, '*');

    if (multInd > -1 ) {
        return calcurator(exp.slice(0, multInd)) * calcurator(exp.slice(multInd + 1));
    }

    const divInd = findOperatorIndex(exp, '/');

    if (divInd > -1 ) {
        return calcurator(exp.slice(0, divInd)) / calcurator(exp.slice(divInd + 1));
    }
    
    if (exp[0] === '(' && exp[exp.length - 1] === ')') {
        return calcurator(exp.slice(1, exp.length - 1));
    }

    if (exp[0] === '-') {
        return -calcurator(exp.slice(1));
    }

    console.log('skipped op - ', exp);

    return 0;
}


console.log(calcurator('1+1'));
console.log(calcurator('(1+1)*2+1'));
console.log(calcurator('-(1+1)'));
console.log(calcurator('-(1+1)'));
console.log(calcurator('(1+1)*(2+2)/2'));
console.log(calcurator('3.5*2'));