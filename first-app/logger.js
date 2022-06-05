// var url = 'http://www.linkedin.com/in/joemugwaneza/';

// function sayHello(name){
//     console.log("Hello MFK")
// }

// module.exports = sayHello;

const EventEmitter = require("events");

class Logger extends EventEmitter{
    log(message){
        console.log(message);
    
        // Raise an event
        this.emit('MessageLogged', {id: 1, url: "http://"})
    }
}

module.exports = Logger;