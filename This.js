🔹 1. Global Scope (non-strict mode)
js
Copy
Edit
console.log(this); // In browser => window
🔹 2. Global Scope (strict mode)
js
Copy
Edit
"use strict";
console.log(this); // undefined
🔹 3. Inside an Object Method
js
Copy
Edit
const user = {
  name: "Payal",
  greet() {
    console.log(this.name);
  },
};

user.greet(); // Payal
🔹 4. In a Regular Function
js
Copy
Edit
function show() {
  console.log(this);
}
show(); // window (or undefined in strict mode)
🔹 5. In an Arrow Function
js
Copy
Edit
const user = {
  name: "Payal",
  greet: () => {
    console.log(this.name);
  },
};

user.greet(); // undefined (inherits from outer scope)
✅ Fix using regular function:

js
Copy
Edit
const user = {
  name: "Payal",
  greet() {
    console.log(this.name);
  },
};

user.greet(); // Payal
