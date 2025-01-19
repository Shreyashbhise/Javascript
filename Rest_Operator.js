// Rest operator in array destructing

// let [first,second, ...rest] = [1,2,3,4,5,6]
// console.log(first);
// console.log(rest);

// Rest operator in object destructing

// let person = {name: "Rutuja", age: 25, city: "New York", country: "USA"}
// let {name,...rest} = person;
// console.log(name);
// console.log(rest);

let [first,second, ...rest] = [1,2,3,4,5,6,7]
console.log(first);
console.log(rest);