// Block Scope
// Definition: Block scope means variables defined with let or const are only accessible inside the {} block where they are declared.
// Key Point: Applies to let and const, not var.


{
    let blockVar = "I am block-scoped";
    console.log(blockVar); // Accessible here
}
console.log(blockVar); // Error: blockVar is not defined
