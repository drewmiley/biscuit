Array.prototype.odd = function() {
    const array = Object(this);
    return array.filter((d, i) => i % 2 != 0);
}
