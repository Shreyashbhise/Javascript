// Assigning a function to a variable


const greet = function() {
    console.log("Hello");
};

// Passing a function as an argument
function callfunction(fn) {
    fn();
}

callfunction(greet)

// A function that returns another function

function createGeeting(greeting) {
    return function(name) {
        console.log(greeting + ',  ' + name + "!");
    };
}

const sayHello = createGeeting("Hello");
sayHello("Alice");


