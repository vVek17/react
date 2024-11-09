const min = (arr) => {
    return arr.reduce((val, acc) => {
        acc = Math.min(val, acc);
        return acc;
    });
};

const max = (arr) => {
    return arr.reduce((val, acc) => {
        acc = Math.max(val, acc);
        return acc;
    });
};

export { min, max };
