// index.js - JS for Lab 13 !
// Author: Lucas Larkin
// Date: October 31, 2024


// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain



// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

//FizzBuzz Function :O
function fizzBuzz () {
  let oneLongString = ""
  for(let i=1;i<+201;i++) {
    
    if (i%105 ==0) {
      oneLongString += "FizzBuzzBoom!"
    }
    else if (i%35 ==0) {
      oneLongString += "FizzBoom!"
    }
    else if (i%15 == 0) {
      oneLongString += "FizzBuzz!";
    }
    else if (i%5 == 0) {
      oneLongString += "Buzz!";
    }
    else if (i%7 == 0) {
      oneLongString += "Boom!";
    }
    else if (i%3 == 0) {
      oneLongString += "Fizz!"
    }
    else {
       oneLongString+= i;
    }
    oneLongString += " <br>";
    $("#output").html(oneLongString);
   }
}

fizzBuzz()
  



function main() {
console.log("Main function started.");
//the code that makes everything happen
}

//let's get this party started
main();
