Array.prototype.flatten = function() {
    const array = Object(this);
    return array.reduce((acc, d) => {
		const concatArray = Array.isArray(d) ? d : [d];
		return acc.concat(concatArray);
	}, []);
}
