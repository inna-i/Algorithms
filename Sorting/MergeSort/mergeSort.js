function merge(a, b) {
	let i = 0, j = 0;
	let res = [];

	while( i < a.length && j < b.length ) {
		if (a[i] < b[j]) {
			res.push(a[i++]);
		} else {
			res.push(b[j++]);
		}		
	}


	while ( i < a.length) res.push(a[i++]);
	while ( j < b.length) res.push(b[j++]);

	return res;
}

function sort(arr) {
	if (arr.length < 2) return arr;
	let middle = Math.floor(arr.length / 2);
	
	return merge(
		sort(arr.slice(0, middle)),
		sort(arr.slice(middle))
	)
}

module.exports = sort;