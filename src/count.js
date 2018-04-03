Array.prototype.count = function(arrow) {
    const array = Object(this);
    return array.filter(arrow).length;
}
