// index.js - JS for Lab 10 !
// Author: Lucas Larkin
// Date: October 31, 2024


// Corbin Wilhelm <ljwilhel@ucsc.edu>
// Lucas Larkin <djlarkin@ucsc.edu>
// November 2024
// License: Public Domain

function generateRandomText () {
  const text = "She's not there? No. You shoulda told me she was having toruble... Well, I didn't know they were gonna be here, Mike. Yeah, but you knew that she was having trouble for like a year and you didn't tell me. I didn't know she was lying to you. Which is why you decided to be a douche to her all day? I wasn't being a douche! You WERE! You were, you were rolling your eyes, you were- you were moping, you were barely talking... You basicially sabaotaged the whole day! Well she was LYING to you, Mike. Straight to your FACE ever since you got here! ...And-and I've been a total third wheel all day it's been miserable... so sorry if I wasn't... I wasn't smiling... Yeah whatever, man. Well, what about us? What? Well, you're mad that I didn't talk to you? Seems like you made it SUPER clear that you're not interested in anything I have to say. That's just not true..! You called maybe a couple times; it's been a YEAR, Mike! Meanwhile, El has like a book of letters from you. That's because she's my girlfriend, Will! And us? We're friends, we're friends! Well, we used to be best friends! Well, maybe you shoulda reached out more, I don't know! Why is this on me? W-why am I the bad guy?! Let's just... let's just find her, okay?";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

//click listener for button
$("#make-convo").click(function(){
  //get new fake dialogue
  const newText = generateRandomText();
  //append a new div to our output
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
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
