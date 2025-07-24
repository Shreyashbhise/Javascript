//  higher-order function in JavaScript is a function that does one or both of the following:

// Takes another function as an argument.





✅ Example 1: Passing a function
function greet(name) {
  return `Hello, ${name}`;
}

function processUser(callback) {
  const name = "Payal";
  return callback(name);
}

console.log(processUser(greet));  
// 👉 "Hello, Payal"


✅ Example 2: Returning a function

function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5));  // 👉 10




// Returns a function as its result.

// function applyOperation(x,y,operation) { // applyOperation is HOF
//     return operation(x,y);
// }

// function add(a,b) {
//     return a + b;
// }

// const result = applyOperation(5,3,add);  // add is callback function
// console.log(result);



