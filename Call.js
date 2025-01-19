// Calls a function immediately with a specific this and arguments passed individually.
const person = {name: "Rutuja"};

function greet(age){
    console.log(`Hello , my name is ${this.name} and i am ${age} years old`);
}
greet.call(person,23);