// const sayHello = require("./logger.js")
// sayHello();

const path = require('path');

let pathObj = path.parse(__filename);

console.log(pathObj);