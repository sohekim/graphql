const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize the object
const myEmmiter = new MyEmitter();

// add listener for the log events
myEmmiter.on('log', (msg) => { logEvents(msg) });

setTimeout(() => {
    // Emit event
    myEmmiter.emit('log', 'Log event emitted');
}, 2000);