Array.prototype.interleave = function(interleaveArray, spacing = 1) {
    const array = Object(this);
	let result = [];
	while (array.length || interleaveArray.length) {
        const newInterleaves = Array.from(Array(spacing).keys())
            .map(d => array.shift())
            .filter(d => d || d === 0 || d === '')
            .concat([interleaveArray.shift()].filter(d => d || d === 0 || d === ''))
        newInterleaves.forEach(d => result.push(d));
	}
	return result;
}
