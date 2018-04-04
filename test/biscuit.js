console.log('Testing Biscuits');

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

console.log(`Array Method - fibonacci
	[1, 2].fibonacci() = [${ [1, 2].fibonacci() }]
	[].fibonacci() = [${ [].fibonacci() }]
	[1, 2, 3, 4].fibonacci() = [${ [1, 2, 3, 4].fibonacci() }]
	[true].fibonacci() = [${ [true].fibonacci() }]
	[1, 2].fibonacci(true) = [${ [1, 2].fibonacci(true) }]
	[].fibonacci(true) = [${ [].fibonacci(true) }]
	[1, 2, 3, 4].fibonacci(true) = [${ [1, 2, 3, 4].fibonacci(true) }]
	[true].fibonacci(true) = [${ [true].fibonacci(true) }]`);

console.log(`Array Method - max
	['zzz', 'aaaaaaa'].max((a, b) => a.length - b.length) = ${ ['zzz', 'aaaaaaa'].max((a, b) => a.length - b.length) }
	[1, 2].max() = ${ [1, 2].max() }
	[].max() = ${ [].max() }
	[1, 2, 3, 4].max() = ${ [1, 2, 3, 4].max() }
	['a', 'b', 'c'].max() = ${ ['a', 'b', 'c'].max() }`);

console.log(`Array Method - odd
	[1, 2].odd() = [${ [1, 2].odd() }]
	[].odd() = [${ [].odd() }]
	[1, 2, 3, 4].odd() = [${ [1, 2, 3, 4].odd() }]
	[true].odd() = [${ [true].odd() }]`);
