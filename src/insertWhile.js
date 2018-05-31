Array.prototype.insertWhile = function(value, condition, index = arr => arr.length) {
	const array = Object(this);
	const indexFunction = typeof index === 'function' ? index : () => index;
	const valueFunction = typeof value === 'function' ? value : () => value;
	while (condition(array)) {
		array.splice(indexFunction(array), 0, valueFunction(array));
	}
	return array;
}
