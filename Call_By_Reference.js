//Call by reference

// when you pass object
// (including arrays  and function)
// to a function they are passed
// by reference

let obj = {name:"saurabh"};

function change(obj) {
    obj.name = "AJAY"
}
change(obj);
console.log(obj);