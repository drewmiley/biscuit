Array.prototype.fibonacci = function(includeZeroth) {
	const array = Object(this);
	let result = includeZeroth ? [0, 1] : [1, 1];
	while (result[result.length - 1] < array.length) {
		result.push(result[result.length - 2] + result[result.length - 1]);
	}
	result.pop();
	return result.map(d => array[d]);
}
