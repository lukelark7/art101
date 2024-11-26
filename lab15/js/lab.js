// index.js - JS for Lab 15 !
// Author: Lucas Larkin
// Date: November 25, 2024


// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain



// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}


document.getElementById('button').addEventListener('click', function() {
  fetch('https://pokeapi.co/api/v2/pokemon/leavanny')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    // Add data directly to html body
    document.body.innerHTML = `<pre>${JSON.stringify(data, null, 4)}</pre>`
  });
});

// var insert = document.getElementById("button");
// insert.addEventListener("click", function() {
//   var name = document.getElementById("input").value;
//   var house = officersAcademy(name);
//   document.getElementById("output").innerHTML = "<p> You will be working with students from" + " " + house + "." + " " + "All I ask is that you guide these open minds with virtue, care, and sincerity.</p>";
//   houseDesc(house);
// });

// Using the core $.ajax() method
$.ajax({
  // The URL for the request (from the api docs)
  url: "https://pokeapi.co/api/v2/pokemon/leavanny/",
  // The data to send (will be converted to a query string)
  data: { 
          // here is where any data required by the api 
          //   goes (check the api docs)
          id: 35,
        },
  // Whether this is a POST or GET request
  type: "GET",
  // The type of data we expect back
  dataType : "json",
  // What do we do when the api call is successful
  //   all the action goes in here
  success: function(data) {
      // do stuff
      console.log(data);
  },
  // What we do if the api call fails
  error: function (jqXHR, textStatus, errorThrown) { 
      // do stuff
      console.log("Error:", textStatus, errorThrown);
  }
})



function main() {
console.log("Main function started.");
//the code that makes everything happen
}

//let's get this party started
main();
