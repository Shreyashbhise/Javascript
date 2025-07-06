🔁 Real-Life Analogy:
A Promise is like ordering food at a restaurant:

You place an order → (this creates the promise)

You wait patiently → (asynchronous)

You either get food (✅ resolved) or hear “we’re out of that” (❌ rejected)

✅ Example:
const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
};

getData().then((data) => {
  console.log(data); // Output: Data received
});

❌ Handling Errors with .catch():
js
Copy
Edit
getData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
