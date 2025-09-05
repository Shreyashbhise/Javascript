function task1() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Task1 done"), 1000);
  });
}

function task2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("❌ Task2 failed"), 2000);
  });
}

function task3() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Task3 done"), 1500);
  });
}


Promise.all([task1(), task2(), task3()])
  .then((results) => console.log("All results:", results))
  .catch((error) => console.log("Error:", error));


Promise.allSettled([task1(), task2(), task3()])
  .then((results) => console.log("Results:", results));

Promise.race([task1(), task2(), task3()])
  .then((result) => console.log("Race winner:", result))
  .catch((error) => console.log("Race error:", error));

Promise.any([task1(), task2(), task3()])
  .then((result) => console.log("First success:", result))
  .catch((error) => console.log("All failed:", error));
