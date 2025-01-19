// const is Blocked scoped, can't beredeclared or reassigned

// Global declared
const a = 6;
{
    console.log(a);
}

// Block declared
{
    const b = 7;
    console.log(b);
}
//console.log(b);

// const
// Behaves like let with hoisting.
// Hoisted, but not initialized.
// Must be declared and initialized at the same time.

console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // Output: 30
