Array.prototype.groupBy = function(arrow) {
	const array = Object(this);
	const arrowFilter = value => d => arrow.call(null, d) === value;
	return array.map(arrow)
		.reduce((acc, d) => !acc.includes(d) ? acc.concat([d]) : acc, [])
		.map(d => array.filter(arrowFilter(d)));
}
