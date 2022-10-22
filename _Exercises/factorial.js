function factorial(n, fn) {
    if (n <= 1) {
        return 1;
    }

    return fn ? fn(n - 1, factorial) * n : factorial(n-1, factorial) * n;
}

console.log(factorial(25));
