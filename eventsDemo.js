import {EventEmitter} from 'events';

// Great for creating custom events and handling them in Node.js
const myEmitter = new EventEmitter();

function greetHandler(name) {
  console.log(`Hello, ${name}!`);
}

function farewellHandler(name) {
  console.log(`Goodbye, ${name}!`);
}

// Register event listeners
myEmitter.on('greet', greetHandler);
myEmitter.on('farewell', farewellHandler);


// Emit events
myEmitter.emit('greet', 'JOHN DOE');
myEmitter.emit('farewell', 'JOHN DOE');

// Error Handling
myEmitter.on('error', (err) => {
  console.error('An error occurred:', err.message);
});

// Simulate an error event
myEmitter.emit('error', new Error('Something went wrong!'));