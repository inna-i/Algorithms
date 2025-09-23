function reverse(arr, left, right) {
    const dif = (right - left)/2;
	for (let i = 0; i < dif; i++) {
        let l = i + left;
        let r = right - i;

      	const temp = arr[l];
		arr[l] = arr[r];
		arr[r] = temp;
    }
}

// reverse(['a','b','c'], 0, 0);
// reverse([ 'w', 'o', 'r', 'l', 'd' ], 6, 10);

function reverseWords(string) {
	let arr = string.split(''),
        left = 0,
        right = 0;

	while (right < arr.length) {
		while(right < arr.length && arr[right] !== ' ') {
            right++;
        }

		reverse(arr, left, right-1);
		left = right+1;
		right = left;
	}	
   
    return arr.join('');
}

console.log(reverseWords('Hello world'));
console.log(reverseWords('Long live rock-n-roll'));
console.log(reverseWords('Long'));