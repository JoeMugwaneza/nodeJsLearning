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

// const EventEmitter = require("events");
// const Logger = require('./logger')
// const logger = new Logger();

// // register a listener
// logger.on("MessageLogged",function(e){
//     console.log('Message Listened', e);

// })

// logger.log('message')

// const http = require('http');

// const server = http.createServer((req, res) =>{
//     if(req.url === "/"){
//         res.write("hello world");
//         res.end();
//     }
//     if(req.url === "/api/courses"){
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//     }
// });



// server.listen(3000);

// console.log("Listening on port 3000");

// const Person = require("./person");

// const person1 = new Person("Mugwaneza Joseph", 29, "Programming");

// person1.greeting();

// const Logger = require('./logger');
// const logger = new Logger();
// logger.on('message', data => console.log('Called Listener', data));

// logger.log("Hello world Mfk");

const htpp = require('http');
const path = require('path');
const fs = require('fs');

const server = htpp.createServer((req, res) =>{
    if(req.url === "/"){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('<h1>Home</h1')
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))