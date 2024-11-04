// index.js - JS for Lab 9 !
// Author: Lucas Larkin
// Date: October 31, 2024


//lab.js - A simple JavaScript jQuery script uses buttons to modify some elements on the page
//THIS CODE REQUIRES JQUERY TO WORK!
// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain

//Copied from Canvas
{/* <head>
    <link rel="stylesheet" type="text/css" href="../css/site.css">
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
    <script src="js/lab.js" DEFER></script>
    </link>
</head> */}

// Constants (ft. jQuery!)

//Add Button for "Challenges" section
$("#challenges").append("<button id='button-challenges'>Make Special</button>");

//Add Button for "Problems" section
$("#problems").append("<button id='button-problems'>Make Special</button>");

//Add Button for "Reflections" section
$("#reflections").append("<button id='button-reflections'>Make Special</button>");

//Add a Click Listener to the Challenges Button

$("#button-challenges").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#challenges").toggleClass("special");
});

//Add a Click Listener to the Problems Button

$("#button-problems").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#problems").toggleClass("special");
});

//Add a Click Listener to the Reflections Button

$("#button-reflections").click(function(){
  // now add (or subtract) the "special" class to the section
  $("#reflections").toggleClass("special");
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
