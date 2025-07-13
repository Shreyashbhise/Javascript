const original = {
  name: "Payal",
  address: {
    city: "Pune"
  }
};

// ✅ Deep clone
const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Delhi";

console.log(original.address.city); // 👉 "Pune" (original is safe)
