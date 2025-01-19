// When you pass a primitive data type
// (like numbers,boolean) to a function,
// it passes as value


let a = 5 ;
function calc(a) {
    a = undefined;
}
calc(a);
console.log(a)