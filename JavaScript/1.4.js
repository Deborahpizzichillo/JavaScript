//Make this same thing as Exercise 2 but this time ask the user for the name, the first name and the city.

const readlineSync = require("readline-sync");

let firstName = readlineSync.question("What's your first name? ");
let lastName = readlineSync.question("What's your last name? ");
let city = readlineSync.question("Where do you live? ");

console.log("Hello " + firstName + " " + lastName + " from " + city);