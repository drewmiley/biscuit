Array.prototype.max = function(arrow) {
    const array = Object(this);
    return array.sort(arrow)[array.length - 1];
}
