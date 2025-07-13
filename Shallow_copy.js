const original = {
  name: "Payal",
  address: {
    city: "Pune"
  }
};

// 🔸 Shallow clone using spread operator
const clone = { ...original };

// Change the nested object
clone.address.city = "Mumbai";

console.log(original.address.city); // 👉 "Mumbai" ❌ (original is affected)
