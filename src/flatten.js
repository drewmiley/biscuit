Array.prototype.flatten = function() {
    const flattenArrayOneLevel = array => array.reduce((acc, d) => acc.concat(Array.isArray(d) ? d : [d]), []);
    const array = Object(this);
    return array.reduce((acc, d) => {
		let concat = [d];
		while (concat.filter(val => Array.isArray(val)).length > 0) {
			concat = flattenArrayOneLevel(concat);
		}
		return acc.concat(concat);
	}, []);
}
