// Basic Default Assignment

// Since username is undefined (a falsy value), it gets assigned the default value "Guest".


let username;

username ||= "Guest";
console.log(username);

// Since username already has a truthy value ("John"), the default assignment doesn’t occur.

let username1 = "john";
username1 ||= "Guest";
console.log(username);

//Combining with Objects

const user = {};
user.name ||= "Rutuja";
user.age ||= 25;
console.log(user);