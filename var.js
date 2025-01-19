// var is Global scoped and Function scoped, can be redeclared and reassign and hosted

var a = 5;
var a = 6;
a = 7;

// Global scoped

{
    console.log(a)
}

// function scoped

const varLearning = () => {
    var b = 6;
    console.log(b)
}
varLearning();

// var
// Hoisted and initialized with undefined.
// You can use the variable before it is declared, but its value will be undefined.

console.log(a); // Output: undefined (hoisted)
var a = 10;
console.log(a); // Output: 10
