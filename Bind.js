// Returns a new function with this set to the specified value. The function is not called immediately.

const person = {name: "Rutuja"};

function greet(age){
    console.log(`Hello , my name is ${this.name} and I am ${age} years old`);
}

const boundGreet = greet.bind(person,25);
boundGreet();