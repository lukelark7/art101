// index.js - JS for Lab 12 !
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

// function officersAcademy (str) {
//   len = str.length;
//   mod = len % 4;
//   if (mod == 0) {
//       return "Black Eagles"
//   }
//   else if (mod == 1) {
//       return "Blue Lions"
//   }
//   else if (mod == 2) {
//       return "Golden Deer"
//   }
//   else if (mod == 3) {
//       return "Ashen Wolves"
//   }
// }

var theHouseButton = document.getElementById("button");
theHouseButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = officersAcademy(name);
  document.getElementById("output").innerHTML = "<p> You will be working with students from" + " " + house + "." + " " + "All I ask is that you guide these open minds with virtue, care, and sincerity.</p>";
  houseDesc(house);
});

//Array Functions for Task X
function officersAcademy(str) {
  const house = ["Black Eagles", "Blue Lions", "Golden Deer", "Ashen Wolves"];
  // Thank you to ChatGPT for helping me figure out the logistics for this line in particular
  return house[str.length % house.length];
}


  //House Descriptions
  function houseDesc(house) {
    let houseDesc;
    if (house == "Black Eagles") {
        houseDesc = "<p>Led by Edelgard, heir to the Adrestian Empire. Students in this house are primarily of noble birth and are magic users.</p>";
    }
    else if (house == "Blue Lions") {
        houseDesc = "<p>Led by Dimitri, prince of the Kingdom of Faerghus. Students in this house value chilvary and excel in military arts.</p>";
    }
    else if (house == "Golden Deer") {
        houseDesc = "<p>Led by Claude, heir to the Leicester Alliance. Students in this house are primarily archers, as per regional tradtion.</p>";
    }
    else if (house == "Ashen Wolves") {
        houseDesc = "<p>Led by Yuri Lecleric. They are a curious bunch...and that is all I can about them...</p>";
    }
    document.getElementById("descOutput").innerHTML = houseDesc;
  }

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
