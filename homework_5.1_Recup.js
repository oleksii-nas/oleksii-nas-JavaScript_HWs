function pow(x, y) {
    let result = 1;

    if (y === 0) {
        return 1;
    } 
    else if (y > 0) { 
        for (let i = 0; i < y; i++) {
            result = result * x;
        }
    } 
    else if (y < 0) { 
        for (let i = 0; i > y; i--) {
            result = result / x;
        }
    }

    return result;
}
const res = pow(3, 2);
console.log(res)
