function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result = result * x;
    }
    return result;
}
const res = pow(2, 3);
console.log(res);
