//Exercise 7.2 - FIBONACCI NUMBERS
//Make a program that asks for an integer n and generates the n first FIBONACCI NUMBERS.
//Yes, you'll have to search what the hell are FIBONACCI NUMBERS.
//  De rij van FIBONACCI is genoemd naar Leonardo van Pisa, bijgenaamd Fibonacci, die de rij noemt in zijn boek Liber abaci uit 1202.
//  De rij blijkt interessante eigenschappen en verbanden te bezitten met onder andere de GULDEN SNEDE.
//  De rij (ook wel reeks van Fibonacci genoemd) begint met 0 en 1 en vervolgens is elk volgende element van de rij steeds de som van de twee voorgaande elementen. 
//  De eerste elementen van de rij[1] zijn dan als volgt: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, ...


const readlineSync = require("readline-sync");
let n = parseInt(readlineSync.question("Say a number"));
 
let array=[];
let x = 0;
let back = 1

for (i=0;i<1000;i++){
    
    array.push(x)
    x = back;
    terug = x + array[i]
   
}
console.log(array[n])
console.log(array[n-1])
console.log(array[n+1])