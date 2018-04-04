Array.prototype.min = function(arrow) {
    const array = Object(this);
    return array.sort(arrow)[0];
}
