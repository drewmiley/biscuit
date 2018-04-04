Array.prototype.interleave = function(concatArray) {
    const array = Object(this);
    return array.concat(concatArray);
}
