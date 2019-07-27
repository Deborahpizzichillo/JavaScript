const readlinesync = require ("readline-sync");

let nummer = 1;

nummer = readlinesync.question("Give me a number between 1 and 7?");

if (nummer == 1)
{
    console.log("Monday");
  }
if (nummer == 2) {
    console.log("Tuesday");
  } 
  
if (nummer == 3) {
    console.log("Wednesday");
  }

if (nummer == 4) {
    console.log("Thursday");
  }

if (nummer == 5) {
    console.log("Friday");
  }

if (nummer == 6) {
    console.log("Saturday");
  }

if (nummer == 7) {
    console.log("Sunday");
  }
  else
  {
    console.log("Error,FAIL!!...");
  }