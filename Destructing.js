// Example with Objects

const user = {
    name: "Rutuja",
    age: 25,
};

const {name, age, city = "Unknown"} = user;

console.log(name);
console.log(age);
console.log(city);


// Example with Arrays

const colors = ["red","blue"];

const [primary,secondary,tertinary = "green"] = colors;

console.log(primary); 
console.log(secondary);
console.log(tertinary);