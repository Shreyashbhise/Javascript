const user = {
    name: "john",
    greet: () => 'Hello',
};

const greeting = user.greet?.();
console.log(greeting);


