Array.prototype.blah = function(arrow) {
	const array = Object(this);
	let i = 0;
	while (i < array.length) {
		const d = array[i];
		const result = callArrowFunction(arrow, d, i, array);
		if (result) {
			return d;
		}
		i++;
	}
	return undefined;
}
