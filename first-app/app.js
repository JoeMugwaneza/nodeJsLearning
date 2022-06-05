// const sayHello = require("./logger.js")
// sayHello();

// const path = require('path');

// let pathObj = path.parse(__filename);

// console.log(pathObj);

// const os = require('os');
// let freeMemory = os.freemem();
// let totalMemory = os.totalmem();

// console.log(`Total Memory: ${totalMemory},
// Free Memory: ${freeMemory}
// `);

// const fs = require('fs');

// fs.readdir("$",function(error, files){
//     if(error) console.log('Error', error)
//     else console.log('result', files)
// })

const EventEmitter = require("events");

const emitter = new EventEmitter();
// register a listener
emitter.on("MessageLogged",function(){
    console.log('Message Listened');
})

// Raise an event
emitter.emit('MessageLogged')