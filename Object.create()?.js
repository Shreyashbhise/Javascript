const personMethods = {
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

const user = Object.create(personMethods); // inherits greet()
user.name = "Payal";
user.greet(); // Hi, I'm Payal



const animal = {
  speak() {
    console.log("Animal speaks");
  }
};

const dog = Object.create(animal);
dog.speak(); // Animal speaks
