// What is parseInt in JavaScript?
// parseInt is a JavaScript function used to convert a string into an integer. It takes two arguments:

// The string to convert.
// The radix (base) for the conversion (optional).

// Why parseInt("123abc") gives 123:
// parseInt starts reading the string from the beginning.
// It keeps parsing numeric characters (1, 2, 3) until it encounters a non-numeric character (a in this case).
// Once it hits a non-numeric character (a), it stops reading further.
// The part parsed before the non-numeric character (123) is returned as an integer.


console.log(parseInt("123abc")); // Output: 123
console.log(parseInt("abc123")); // Output: NaN (Not a Number)
