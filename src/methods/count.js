Array.prototype.count = function(predicate) {
    const array = Object(this);
    return array.filter(predicate).length;
}
