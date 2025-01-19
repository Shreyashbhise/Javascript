function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const multiplyBy2 = multiply(2);
console.log(multiplyBy2(5));
console.log(multiply(3)(4));