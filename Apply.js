// Similar to call(), but arguments are passed as an array.

const person = {name: "Rutuja"};

function greet(age){
    console.log(`Hello , my name is ${this.name} and I am ${age} years old`);
}
greet.apply(person, [23]);