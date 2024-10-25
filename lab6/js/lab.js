// index.js - JS for Lab 6 !
// Author: Lucas Larkin
// Date: October 24, 2024

// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// October 2024
// License: Public Domain

// Constants
const myTransport =  ['The Bus', 'My Beautiful and Beloved Orange Honda Civic']
// Functions
var myBeautifulAndBelovedOrangeHondaCivic = {
  make: "Honda",
  model: "Civic",
  color: "Orange",
  year: 1974,
  age: function() {
    return 2024 - this.year;
  }
}
document.write("My two main methods of transport are: " + myTransport[0] + " and " + myTransport[1] + "</br>");
document.write("Want to know more about my beautiful and beloved orange Honda Civic? Look no further than right here!: <pre>", 
  JSON.stringify(myBeautifulAndBelovedOrangeHondaCivic, null, '\t'), "</pre>");

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}


function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
