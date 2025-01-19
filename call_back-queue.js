// What is the Callback Queue?
// The callback queue is where callbacks from asynchronous operations (like setTimeout, setInterval, DOM events) wait to be executed.

console.log("Start");

setTimeout(() => {
  console.log("Callback");
}, 1000);

console.log("End");
