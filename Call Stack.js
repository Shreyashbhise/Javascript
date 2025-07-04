🔹 1. Call Stack
✅ What is it?
The Call Stack is where JavaScript keeps track of function execution. It handles synchronous code — one function at a time.

🧠 How it works:
When a function is called, it’s pushed onto the stack.

When the function returns, it’s popped off.

Only one function runs at a time — JS is single-threaded.

📌 Example:

function greet() {
  console.log("Hello");
}
greet();


// pushed to stack → runs → removed
