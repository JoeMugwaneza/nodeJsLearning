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
const Logger = require('./logger')
const logger = new Logger();

// register a listener
logger.on("MessageLogged",function(e){
    console.log('Message Listened', e);

})

logger.log('message')