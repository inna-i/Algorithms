function fibonacciWithMemo(n, memo = {}) {
    if (n <= 1) return n;
    if (memo[n]) return memo[n];
    memo[n] = fibonacciWithMemo(n - 1, memo) + fibonacciWithMemo(n - 2, memo);
    return memo[n];
}

// Example: Generate Fibonacci sequence up to n
function fibonacciSequence(n) {
    const seq = [];
    for (let i = 0; i <= n; i++) {
        seq.push(fibonacciWithMemo(i));
    }
    return seq;
}

// Usage
console.log(fibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
