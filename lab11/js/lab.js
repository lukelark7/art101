// index.js - JS for Lab 11 !
// Author: Lucas Larkin
// Date: October 31, 2024


// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain

//Sorts string characters in alphabetical order
function sortString(inputString) {
  return inputString.split('').sort().join(''); // Also correcting an error here
}

//click listener for a button
$("#submit").click(function(){
  const userName = $('#user-name').val();
  userNameSorted = sortString(userName);
  $("#sorted-name").prepend('<div class="text"><p>' + "Here you go! All sorted:" + userNameSorted + '</p></div>');
});

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
