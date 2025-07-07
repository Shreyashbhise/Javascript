The EventEmitter is a class in Node.js that helps you create, handle, and listen to custom events.


const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listener (subscribing to the event)
emitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emitting the event
emitter.emit('greet', 'Payal');




✅ Example: Using EventEmitter inside a Class



const EventEmitter = require('events');

// Create a custom class that extends EventEmitter
class MyEmitter extends EventEmitter {
  sayHello(name) {
    // Emit a custom event called 'hello'
    this.emit('hello', name);
  }
}

// Create an instance
const emitter = new MyEmitter();

// Listen to the 'hello' event
emitter.on('hello', (name) => {
  console.log(`👋 Hello, ${name}!`);
});

// Call method that triggers the event
emitter.sayHello('Payal');


🖨 Output:

👋 Hello, Payal!
