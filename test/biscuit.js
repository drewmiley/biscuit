console.log('Testing Biscuits');

console.log('Array Method - blah');

console.log(`[1, 2].blah(a => a === 1, true) = ${ [1, 2].blah(a => a === 1, true) }`);

console.log(`Array Method - count
	[1, 2].count(a => a === 1) = ${ [1, 2].count(a => a === 1) }
	[1, 2].count(a => a === 0) = ${ [1, 2].count(a => a === 0) }
	[].count(a => a === 1) = ${ [].count(a => a === 1) }
	[1, 2, 3, 4].count(a => a % 2) = ${ [1, 2, 3, 4].count(a => a % 2) }
	[true, true, false].count(Boolean) = ${ [true, true, false].count(Boolean) }`);
