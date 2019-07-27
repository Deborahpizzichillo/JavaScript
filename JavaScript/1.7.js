//Ask to the user its shoe size and its birth year. Then make the following calculation:

const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question("What is your shoe size? ");
let birthday = readlineSync.question("What year where you born? ");

//Then make the following calculation:

let result= (((shoeSize*2) +5)*50)-birthday+1766;

console.log(result);
