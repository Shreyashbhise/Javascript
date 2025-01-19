function showLocalVar() {
    let localVar = "I am local";
    console.log(localVar); // Accessible here
}

showLocalVar(); // Output: "I am local"
console.log(localVar); // Error: localVar is not defined
