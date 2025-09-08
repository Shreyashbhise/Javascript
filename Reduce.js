🔹 reduce() – Combine all elements into one value
Reduces the array to a single value by applying a function.

✅ Example:

const arr3 = [2,4,5,6];
const newValue = arr3.reduce((prev, curr) => {
    return prev+curr;
})

console.log(newValue);
