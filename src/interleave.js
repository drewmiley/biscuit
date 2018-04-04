Array.prototype.interleave = function(interleave, spacing = 1) {
    let array = Object(this);
	let interleaveArray = interleave;
	let result = [];
	let value;
	while (array.length || interleaveArray.length) {
		for (var i = 0; i < spacing; i++) {
			value = array.shift();
			if (value && value !== 0 && value != '') {
				result.push(value);
			}
		}
		value = interleaveArray.shift();
		if (value && value !== 0 && value != '') {
			result.push(value);
		}
	}
	return result;
}
