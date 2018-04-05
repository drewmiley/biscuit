const callArrowFunction = (arrow, d, i, array) => {
    return arrow.call(null, d, i, array);
}

const flattenArrayOneLevel = array => {
    return array.reduce((acc, d) => {
        let concat = Array.isArray(d) ? d : [d];
        return acc.concat(concat);
    }, []);
}
