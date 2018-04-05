Array.prototype.flatten = function() {
    const array = Object(this);
    return array.reduce((acc, d) => {
		let concat = [d];
		while (concat.filter(val => Array.isArray(val)).length > 0) {
			concat = flattenArrayOneLevel(concat);
		}
		return acc.concat(concat);
	}, []);
}
