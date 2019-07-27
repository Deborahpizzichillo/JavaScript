//Number Guesser
//Make a program that generates an integer between 1 and 100 (don't display it to the user).

const readlineSync = require("readline-sync");

function Guessthenumber(){
var random = Math.floor((Math.random() * 100)+1)
var x
while ( x != random ) {
    x = readlineSync.question("say a number between 1 and 100");
    console.log(random)
    if ( x > random ){
        console.log("Guess lower")

    }else{
        console.log("Guess higher")
    }

    

}
console.log("wel done!!")
Guessthenumber();
}


Guessthenumber();

