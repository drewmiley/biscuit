Array.prototype.blah = function(predicate) {
	console.log(this);
	console.log(predicate);
	console.log(arguments);
	log();

	const array = Object(this);
	let i = 0;
	while (i < array.length) {
		const d = array[i];
		const result = predicate.call(null, d, i, array);
		if (result) {
			return d;
		}
		i++;
	}
	return undefined;
}
