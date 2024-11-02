// index.js - JS for Lab 7 !
// Author: Lucas Larkin
// Date: October 31, 2024

// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// October 2024
// License: Public Domain

// Constants
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Look at my array! Look at how cute it is!", array);
// Functions
//A function that multiplies every number in the array by ten
function multiply10(x){
  var product = 10 * x
  return product;
}
let multipliedResults = array.map(multiply10);
console.log("Let's see what happens when you multiply our array by ten...: ", multipliedResults);

//Now I want to divide every number in the array by two by mapping the new function onto the previous results
let dividedResults = array.map(function(x) {
  return x/2;
});
console.log("Now let's take those results and divide them by two!: ", dividedResults);

//Got help from my partner Corbin about Task X. Here is what they came up with:
$("#output").html("Look at my array! Look at how cute it is!: " + array + "<br>" +
  "Let's see what happens when you multiply our array by ten...: " + multipliedResults + "<br>" +
   "Now let's take those results and divide them by two!: " + dividedResults
);

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
