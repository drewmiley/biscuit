Array.prototype.applyFunctions = function(functions = []) {
	const array = Object(this);
	return array.map(d => functions.reduce((acc, f) => f(acc), d));
}
