// let Blocked scoped can't be redeclared but can be reassigned

let a = 5;
a = 6;

// Block scope
{
    let abc = 8;
    console.log(abc);
}
//console.log(abc);


// Hoisted, but not initialized.
// Accessing it before declaration results in a ReferenceError.
// It is in a "Temporal Dead Zone" from the start of the block until its declaration.

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // Output: 20
