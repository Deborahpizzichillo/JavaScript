//Ask the user to enter its first name and display a message saying "Hello first name".

const readlineSync = require("readline-sync");
let name = readlineSync.question("Can you give me your name please? ");
console.log("Hello " + name);