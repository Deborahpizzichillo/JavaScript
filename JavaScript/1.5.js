//Ask two numbers with decimal part to the user. For the first one only keep the integer part. Then multiply them and display the result.

const readlineSync = require("readline-sync");

let decimal1 = readlineSync.question("Give me a decimal number. ");
let decimal2 = readlineSync.question("Give me another decimal number. ");

console.log(Math.floor(decimal1) * decimal2);