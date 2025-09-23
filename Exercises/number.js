function nthDigit(n, index) {
    return Math.floor(n/(10**index)) % 10;
}
function digitsCounter(n) {
    return Math.floor(Math.log10(n)) + 1;
}

console.log(nthDigit(123, 0)) //3
console.log(nthDigit(123, 1)) //2
console.log(nthDigit(123, 2)) //1
console.log(nthDigit(123, 5)) //0

console.log(digitsCounter(999));
console.log(digitsCounter(99999));
console.log(digitsCounter(9999999));