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
    // if(req.url === "/api/users"){
    //   const users = [
    //       {name: 'Mugwaneza Joseph', age: 30},
    //       {name: 'Abayo Jean Luc', age: 27}
    //   ];
    //   res.writeHead(200, {'Content-Type': 'application/json'});
    //   res.end(JSON.stringify(users));
    // }

// Build file path
let filePath = path.join(__dirname, 
    "public", 
    req.url === "/"? "index.html" : req.url
    );
    // Extension of file
    let extname = path.extname(filePath);
    // Initial content type
    let contentType = 'text/html';
    // Check ext and set content type

    switch(extname){
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png' :
            contentType = 'image/png';
            break;
        case '.jpg' :
            contentType = 'image/jpg';
            break;
    }
// Read file
fs.readFile(filePath, (err, content) =>{
    if(err){
        if(err.code == 'ENOENT'){
            // Page not found
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) =>{
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(content, 'utf-8');
            })
        } else {
            // Some server error
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`)
        }
    } else{
        // Success
        res.writeHead(200, {'Content-Type': contentType});
        res.end(content, 'utf-8');
    }
})

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))