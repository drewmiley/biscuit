Array.prototype.deleteWhile = function(condition, index = arr => arr.length - 1) {
	const array = Object(this);
	const indexFunction = typeof index === 'function' ? index : () => index;
	while (condition(array)) {
		array.splice(indexFunction(array), 1);
	}
	return array;
}
