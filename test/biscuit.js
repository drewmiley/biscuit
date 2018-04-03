console.log('Testing Biscuits');

console.log('Array Method - blah');

console.log(`[1, 2].blah(a => a === 1, true) = ${ [1, 2].blah(a => a === 1, true) }`);

console.log(`Array Method - count
	[1, 2].count(a => a === 1) = ${ [1, 2].count(a => a === 1) }
	[1, 2].count(a => a === 0) = ${ [1, 2].count(a => a === 0) }
	[].count(a => a === 1) = ${ [].count(a => a === 1) }
	[1, 2, 3, 4].count(a => a % 2) = ${ [1, 2, 3, 4].count(a => a % 2) }
	[true, true, false].count(Boolean) = ${ [true, true, false].count(Boolean) }`);

console.log(`Array Method - even
	[1, 2].even() = [${ [1, 2].even() }]
	[].even() = [${ [].even() }]
	[1, 2, 3, 4].even() = [${ [1, 2, 3, 4].even() }]
	[true].even() = [${ [true].even() }]`);

console.log(`Array Method - odd
	[1, 2].odd() = [${ [1, 2].odd() }]
	[].odd() = [${ [].odd() }]
	[1, 2, 3, 4].odd() = [${ [1, 2, 3, 4].odd() }]
	[true].odd() = [${ [true].odd() }]`);
