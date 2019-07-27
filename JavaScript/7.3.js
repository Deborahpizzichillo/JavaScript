//Divisors !!!
//Program that asks for a positive integer(geheel getal).The display ALL the divisors of that integer(geheel getal) which are not 1or itslef.

const readlineSync = require("readline-sync");
let divide
let boolean = false;


function findpriem() {
    let x = parseInt(readlineSync.question("Say a number"));


for ( i=2 ; i<x ; i++ ){
    divide=x/i;
    if (Number.isInteger(divide)){
        console.log(divide)
        boolean = true;
    }
     
}
 if (boolean == false){
     console.log("prime number!")
 }
 boolean = false;
 findpriem()
 
}
findpriem()

