function stringReverse(str) {
	const chars = str.split('');
	const len = chars.length;

	for(let i = 0; i < len/2; i++) {
		const temp = chars[i];
		
		chars[i] = chars[len-i];
		chars[len-i] = temp;
	}
	return chars.join('');
}

// O(n)

console.log(stringReverse('abcd'));
console.log(stringReverse('abc'));
console.log(stringReverse('abcde'));
console.log(stringReverse('a'));