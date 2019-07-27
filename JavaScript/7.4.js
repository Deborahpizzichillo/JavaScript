//Make an interactive program to manager your favorite pizza flavors.

const readlineSync = require("readline-sync");
var array = []


function PizzaPlanet (){
console.log("") ;

console.log("1 - List all the pizza flavors");
console.log("2 - Add a new pizza flavor");
console.log("3 - Remove a pizza flavor");
console.log("4 - Exit this program");

let x = parseInt(readlineSync.question("Enter your action's number:"));

if (x==1){

    console.log(array);
    PizzaPlanet();



}else if (x==2){
    array.push(readlineSync.question("add pizza flavor"))
    PizzaPlanet()


}else if (x==3){
    console.log(array);
    var cheat = (readlineSync.question("Enter your action's number:"));
    array.splice(cheat-1,cheat-1)  
    PizzaPlanet();



}else if (x==4){
    console.log("Exiting this program");

    
}else{

    console.log("Did you choose right !?!") ;
    console.log("") ;
    PizzaPlanet();

}


}
PizzaPlanet();