console.log('Testing Biscuits');

console.log(`Array Method - applyFunctions
	[].applyFunctions() = ${ JSON.stringify([].applyFunctions()) }
	[1, 2].applyFunctions() = ${ JSON.stringify([1, 2].applyFunctions()) }
	[].applyFunctions([d => d + 1, d => 2 * d]) = ${ JSON.stringify([].applyFunctions([d => d + 1, d => 2 * d])) }
	[1, 2].applyFunctions([d => d + 1, d => 2 * d]) = ${ JSON.stringify([1, 2].applyFunctions([d => d + 1, d => 2 * d])) }
	['a'].applyFunctions([d => d + 'a', d => d + 'a', d => d + 'a', d => d + 'a', d => d + 'a']) = ${ JSON.stringify(['a'].applyFunctions([d => d + 'a', d => d + 'a', d => d + 'a', d => d + 'a', d => d + 'a'])) }`);

console.log(`Array Method - count
	[1, 2].count(a => a === 1) = ${ [1, 2].count(a => a === 1) }
	[1, 2].count(a => a === 0) = ${ [1, 2].count(a => a === 0) }
	[].count(a => a === 1) = ${ [].count(a => a === 1) }
	[1, 2, 3, 4].count(a => a % 2) = ${ [1, 2, 3, 4].count(a => a % 2) }
	[true, true, false].count(Boolean) = ${ [true, true, false].count(Boolean) }`);

console.log(`Array Method - deleteWhile
	[1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 0) = ${ JSON.stringify([1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 0)) }
	[1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 2) = ${ JSON.stringify([1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 2)) }
	[1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 2, 1) = ${ JSON.stringify([1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 2, 1)) }
	[1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 2, () => 1) = ${ JSON.stringify([1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 2, () => 1)) }
	[1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 2, arr => arr.indexOf(Math.min(...arr))) = ${ JSON.stringify([1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 2, arr => arr.indexOf(Math.min(...arr)))) }
	[1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 2, arr => arr.length - 2) = ${ JSON.stringify([1, 2, 3, 4, 5].deleteWhile(arr => arr.length > 2, arr => arr.length - 2)) }`);

console.log(`Array Method - even
	[1, 2].even() = ${ JSON.stringify([1, 2].even()) }
	[].even() = ${ JSON.stringify([].even()) }
	[1, 2, 3, 4].even() = ${ JSON.stringify([1, 2, 3, 4].even()) }
	[true].even() = ${ JSON.stringify([true].even()) }`);

console.log(`Array Method - fibonacci
	[1, 2].fibonacci() = ${ JSON.stringify([1, 2].fibonacci()) }
	[].fibonacci() = ${ JSON.stringify([].fibonacci()) }
	[1, 2, 3, 4].fibonacci() = ${ JSON.stringify([1, 2, 3, 4].fibonacci()) }
	[true].fibonacci() = ${ JSON.stringify([true].fibonacci()) }
	[1, 2].fibonacci(true) = ${ JSON.stringify([1, 2].fibonacci(true)) }
	[].fibonacci(true) = ${ JSON.stringify([].fibonacci(true)) }
	[1, 2, 3, 4].fibonacci(true) = ${ JSON.stringify([1, 2, 3, 4].fibonacci(true)) }
	[true].fibonacci(true) = ${ JSON.stringify([true].fibonacci(true)) }`);

console.log(`Array Method - flatten
	[[1], 2, [3, 4]].flatten() = ${ JSON.stringify([[1], 2, [3, 4]].flatten()) }
	[1, 2, 3, 4].flatten() = ${ JSON.stringify([1, 2, 3, 4].flatten()) }
	[[1], 2, [[3, 4]]].flatten() = ${ JSON.stringify([[1], 2, [[3, 4]]].flatten()) }
	[[1], 2, [3, [4]]].flatten() = ${ JSON.stringify([[1], 2, [3, [4]]].flatten()) }
	[[1], 2, [[3, 4]]].flatten() = ${ JSON.stringify([[1], 2, [[3, 4]]].flatten(2)) }
	[[1], 2, [3, [4]]].flatten() = ${ JSON.stringify([[1], 2, [3, [4]]].flatten(2)) }
	[[1], 2, [[3, [4]]]].flatten() = ${ JSON.stringify([[1], 2, [[3, [4]]]].flatten(2)) }
	[[1], 2, [3, [[4]]]].flatten() = ${ JSON.stringify([[1], 2, [3, [[4]]]].flatten(2)) }`);

console.log(`Array method - groupBy
	['aaaa', 'bb', 'cccc', 'dd', 'eee'].groupBy(d => d.length) = ${ JSON.stringify(['aaaa', 'bb', 'cccc', 'dd', 'eee'].groupBy(d => d.length)) }
	['haaaa', 'hbb', 'jcccc', 'kdd', 'jeee'].groupBy(d => d.substring(0, 1)) = ${ JSON.stringify(['haaaa', 'hbb', 'jcccc', 'kdd', 'jeee'].groupBy(d => d.substring(0, 1))) }
	[2, 5, 10, 6, 7, 8, 4, 3].groupBy(d => d % 3) = ${ JSON.stringify([2, 5, 10, 6, 7, 8, 4, 3].groupBy(d => d % 3)) }`);

console.log(`Array Method - insertWhile
	[1, 2, 3, 4, 5].insertWhile(1, arr => arr.length < 8) = ${ JSON.stringify([1, 2, 3, 4, 5].insertWhile(1, arr => arr.length < 8)) }
	[1, 2, 3, 4, 5].insertWhile(() => 1, arr => arr.length < 8) = ${ JSON.stringify([1, 2, 3, 4, 5].insertWhile(() => 1, arr => arr.length < 8)) }
	[1, 2, 3, 4, 5].insertWhile(arr => arr[2], arr => arr.length > 8) = ${ JSON.stringify([1, 2, 3, 4, 5].insertWhile(arr => arr[2], arr => arr.length < 8)) }
	[1, 2, 3, 4, 5].insertWhile(arr => arr[arr.length - 1] + 1, arr => arr.length > 8) = ${ JSON.stringify([1, 2, 3, 4, 5].insertWhile(arr => arr[arr.length - 1] + 1, arr => arr.length < 8)) }
	[1, 2, 3, 4, 5].insertWhile(1, arr => arr.length < 8, 1) = ${ JSON.stringify([1, 2, 3, 4, 5].insertWhile(1, arr => arr.length > 8, 1)) }
	[1, 2, 3, 4, 5].insertWhile(() => 1, arr => arr.length > 8, () => 1) = ${ JSON.stringify([1, 2, 3, 4, 5].insertWhile(() => 1, arr => arr.length < 8, () => 1)) }
	[1, 2, 3, 4, 5].insertWhile(arr => arr[2], arr => arr.length > 8, arr => arr.indexOf(Math.min(...arr))) = ${ JSON.stringify([1, 2, 3, 4, 5].insertWhile(arr => arr[2], arr => arr.length < 8, arr => arr.indexOf(Math.min(...arr)))) }
	[1, 2, 3, 4, 5].insertWhile(arr => arr[arr.length - 1] + 1, arr => arr.length > 8, arr => arr.length - 2) = ${ JSON.stringify([1, 2, 3, 4, 5].insertWhile(arr => arr[arr.length - 1] + 1, arr => arr.length < 8, arr => arr.length - 2)) }`);

console.log(`Array Method - interleave
	[0, 2].interleave([3, 4]) = ${ JSON.stringify([0, 2].interleave([3, 4])) }
	[1, 2].interleave([3, '']) = ${ JSON.stringify([1, 2].interleave([3, ''])) }
	[1, 2].interleave([3, 4]) = ${ JSON.stringify([1, 2].interleave([3, 4])) }
	[].interleave([3, 4]) = ${ JSON.stringify([].interleave([3, 4])) }
	[1, 2].interleave([]) = ${ JSON.stringify([1, 2].interleave([])) }
	[1, 2, 5].interleave([3, 4], 2) = ${ JSON.stringify([1, 2, 5].interleave([3, 4], 2)) }
	[1, 2, 5, 7, 8, 9].interleave([3, 4], 3) = ${ JSON.stringify([1, 2, 5, 7, 8, 9].interleave([3, 4], 3)) }
	[1, 2, 4].interleave([5, 6], 4) = ${ JSON.stringify([1, 2, 4].interleave([5, 6], 4)) }`);

console.log(`Array Method - max
	['zzz', 'aaaaaaa'].max((a, b) => a.length - b.length) = ${ ['zzz', 'aaaaaaa'].max((a, b) => a.length - b.length) }
	[1, 2].max() = ${ [1, 2].max() }
	[].max() = ${ [].max() }
	[1, 2, 3, 4].max() = ${ [1, 2, 3, 4].max() }
	['a', 'b', 'c'].max() = ${ ['a', 'b', 'c'].max() }`);

console.log(`Array Method - min
	['zzz', 'aaaaaaa'].min((a, b) => a.length - b.length) = ${ ['zzz', 'aaaaaaa'].min((a, b) => a.length - b.length) }
	[1, 2].min() = ${ [1, 2].min() }
	[].min() = ${ [].min() }
	[1, 2, 3, 4].min() = ${ [1, 2, 3, 4].min() }
	['a', 'b', 'c'].min() = ${ ['a', 'b', 'c'].min() }`);

console.log(`Array Method - odd
	[1, 2].odd() = ${ JSON.stringify([1, 2].odd()) }
	[].odd() = ${ JSON.stringify([].odd()) }
	[1, 2, 3, 4].odd() = ${ JSON.stringify([1, 2, 3, 4].odd()) }
	[true].odd() = ${ JSON.stringify([true].odd()) }`);
