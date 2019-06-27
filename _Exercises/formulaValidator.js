const validFormula = '(1+1*[2+2]*{3+3})';
const invalidFormula = '(1+1*[2+2]*{3+3)';
const invalidFormula2 = '(1+1*[2+2}*{3+3])';

// 2 + 2
// 2 2 +

function isValid(formula) {
    const arr = formula.split('');
    const stack = [];
    const openBrackets = ['(', '{', '['];
    const closeBrackets = [')', '}', ']'];

    for(let i =0; i<arr.length; i++) {
        if (openBrackets.includes(arr[i])) {
            stack.push(arr[i]);
        } else if (closeBrackets.includes(arr[i])) {
            const peak = stack[stack.length - 1];
            if(openBrackets.indexOf(peak) == closeBrackets.indexOf(arr[i])) {
                stack.pop();
            }
        }        

    }

    return stack.length === 0 ? `Formula - ${formula} is valid` : `Formula - ${formula} is invalid`;

}

console.log(isValid(validFormula));
console.log(isValid(invalidFormula));
console.log(isValid(invalidFormula2));

