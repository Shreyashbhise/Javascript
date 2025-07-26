const user = {
  name: "Payal",
  address: {
    city: "Pune"
  }
};

console.log(user.address?.city);     // ✅ "Pune"
console.log(user.address?.zip);      // ✅ undefined (no error)
console.log(user.contact?.phone);    // ✅ undefined (no error)
