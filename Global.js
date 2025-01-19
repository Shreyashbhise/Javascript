// Global Scope:
// Stored in the window object (in browsers):
// Global variables declared using var or implicitly (without a declaration keyword) become properties of the window object in the browser.
// However, let and const in the global scope do not attach to the window object but are still globally accessible.


var globalvar = " I am global";

function showGlobal(){
    console.log(globalvar);
}
showGlobal();
console.log(globalvar);