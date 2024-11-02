// index.js - JS for Lab 7 !
// Author: Lucas Larkin
// Date: October 24, 2024

// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// October 2024
// License: Public Domain

// Constants

// Functions
//Make webpage themed around the Earthbound Name Screen :3
function yourNamePlease () {
  var pleaseNameHim = window.prompt("Your name, please!");
  console.log("yourNamePlease =", yourNamePlease);
  //since strings can't be sorted, we have to split them!
  var andNameHerToo = pleaseNameHim.split('');
  console.log("andNameHerToo =", andNameHerToo)
  //once it is split, we sort them
  var nameYourFriend = andNameHerToo.sort();
  console.log("nameYourFriend =", nameYourFriend)
  //finally we transform the array back into a string by joining the elements all together
  var nameAnotherFriend = nameYourFriend.join('');
  console.log("nameAnotherFriend =", nameAnotherFriend)
  return nameAnotherFriend;
}

//Output
document.write("Here's your name! All I need is the name of your pet and your favorite thing and we should be good to go!: ", 
  yourNamePlease(), "</br>");


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
