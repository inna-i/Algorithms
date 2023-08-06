const inputStr = "Remember, all I'm offering is the truth. Nothing more.";

function calcStringSymbols(str) {
    const symbols = {};

    for (let i = 0; i <= str.length / 2; i++) {
        if (symbols[str[i]]) {
            symbols[str[i]] += 1;
        } else {
            symbols[str[i]] = 1;
        }
        
        if (symbols[str[str.length - 1 - i]]) {
            symbols[str[str.length - 1 - i]] += 1;
        } else {
            symbols[str[str.length - 1 - i]] = 1;
        }
    }

    return symbols;    
}

console.log(calcStringSymbols(inputStr))