 Callback Queue (Task Queue)

✅ What is it?
The Callback Queue holds asynchronous callbacks (like those from setTimeout, DOM events, or fetch) waiting to be executed when the Call Stack is empty.

🧠 How it works:
Async operations (e.g., setTimeout()) are handled by browser APIs.

When complete, their callbacks are moved to the callback queue.

The Event Loop constantly checks if the Call Stack is empty.

If it is, it moves a task from the Callback Queue to the Call Stack.

🔁 How they work together:



console.log("Start");

setTimeout(() => {
  console.log("Async");
}, 0);

console.log("End");


📋 Execution Order:
console.log("Start") → Call Stack

setTimeout(...) → Timer set by browser (not added to call stack now)

console.log("End") → Call Stack

After timer, callback (console.log("Async")) goes to Callback Queue

When Call Stack is empty → Event Loop pushes it from Queue to Stack



🟩 Output:


Start
End
Async
