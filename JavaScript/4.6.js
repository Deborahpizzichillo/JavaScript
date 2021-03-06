/* Create a function factorial(a) that returns the factorial of a number.
That function must be recursive. */


//De faculteit van een natuurlijk getal n, genoteerd als n! 

function factorialize(num) {
  //nummer kleiner dan 0, afbreken en -1 weergeven
  if (num < 0) 
        return -1; 
  //factoriaal van 0 = 1
  else if (num == 0) 
      return 1; 
  //in de andere gevallen de functie herhalen tot num = 0
  else {
      return (num * factorialize(num - 1));
  }
  // Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6
  //Dit is de output van de functie met num = 5
  //5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1) = 5 * 4 * 3 * 2 * 1 = 120
  //output num = 3
  //3* (3-1) * (2-1) = 3 * 2 * 1 = 6)
}
factorialize(5);

console.log(factorialize(5));


