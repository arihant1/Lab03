"use strict";

//Welcome statement and prompt for name

var name = prompt(
  "Welcome and thanks for taking my quiz! May i please know your name?"
);
//console.log('The User\'s name is' + name);

//Saying hello to our guest

alert("Welcome " + name + "! I'm Baloo.Thanks for visiting");
quest1();
//beginning of question and answer time
//first question - just seeing if they realize what's happening

//var test = confirm('Is this a test\?');

//saving it

//console.log('This was saved: ' + test);

//Letting User Know about their answer

//if (test == true) {
//alert('you are correct');
//} else {
//  alert(' you have choosen poorly ') ;
//}

//first actual question regaring the quiz and the score counter

var AnsCounter = 0;

function quest1() {
  var q1 = prompt('Was Baloo in the Air Force? "Yes or No?"');

  //reformatting answer to something understandable

  var q1edit = q1.toLowerCase();

  //validating user's input

  if (q1edit !== "no" && q1edit !== "n" && q1edit !== "yes" && q1edit !== "y") {
    q1 = prompt('Answer the question with a "Yes or No"');
    q1edit = q1.toLowerCase();
  }

  //checking to see if answer is correct

  if (q1edit === "yes" || q1edit === "y") {
    //console.log(name + ' answered poorly');
    alert("You've answered poorly " + name);
    quest2();
  } else {
    //console.log(name + ' answered correctly');
    alert("Congratulations " + name + "! You're correct!");
    AnsCounter++;
    quest2();
  }
}

function quest2() {
  //Second actual question regaring the quiz
  var q2 = prompt('Was Baloo ever deployed? "Yes or No?"');

  //reformatting answer to something understandable
  var q2edit = q2.toLowerCase();

  //validating user's input
  if (q2edit !== "no" && q2edit !== "n" && q2edit !== "yes" && q2edit !== "y") {
    q2 = prompt('Answer the question with a "Yes or No"');
    q2edit = q2.toLowerCase();
  }

  //checking to see if answer is correct
  if (q2edit === "no" || q2edit === "n") {
    //console.log(name + ' answered poorly');
    alert("You've answered poorly " + name);
    quest3();
  } else {
    //console.log(name + ' answered correctly');
    alert("Congratulations " + name + "! You're correct!");
    AnsCounter++;
    quest3();
  }
}
//third question regaring the quiz
function quest3() {
  var q3 = prompt('Was Baloo born in America? "Yes or No?"');

  //reformatting answer to something understandable
  var q3edit = q3.toLowerCase();

  //validating user's input
  if (q3edit !== "no" && q3edit !== "n" && q3edit !== "yes" && q3edit !== "y") {
    q3 = prompt('Answer the question with a "Yes or No"');
    q3edit = q3.toLowerCase();
  }

  //checking to see if answer is correct
  if (q3edit === "yes" || q3edit === "y") {
    //console.log(name + ' answered poorly');
    alert("You've answered poorly " + name);
    quest4();
  } else {
    //console.log(name + ' answered correctly');
    alert("Congratulations " + name + "! You're correct!");
    AnsCounter++;
    quest4();
  }
}
//fourth question regaring the quiz
function quest4() {
  var q4 = prompt('Did Baloo ever live in New York? "Yes or No?"');

  //reformatting answer to something understandable
  var q4edit = q4.toLowerCase();

  //validating user's input
  if (q4edit !== "no" && q4edit !== "n" && q4edit !== "yes" && q4edit !== "y") {
    q4 = prompt('Answer the question with a "Yes or No"');
    q4edit = q4.toLowerCase();
  }

  //checking to see if answer is correct
  if (q4edit === "no" || q4edit === "n") {
    //console.log(name + ' answered poorly');
    alert("You've answered poorly " + name);
    quest5();
  } else {
    //console.log(name + ' answered correctly');
    alert("Congratulations " + name + "! You're correct!");
    AnsCounter++;
    quest5();
  }
}

//fifth actual question regaring the quiz
function quest5() {
  var q5 = prompt('Did Baloo ever work for the Yankees? "Yes or No?"');

  //reformatting answer to something understandable
  var q5edit = q5.toLowerCase();

  //validating user's input
  if (q5edit !== "no" && q5edit !== "n" && q5edit !== "yes" && q5edit !== "y") {
    q5 = prompt('Answer the question with a "Yes or No"');
    q5edit = q1.toLowerCase();
  }

  //checking to see if answer is correct
  if (q5edit === "yes" || q5edit === "y") {
    //console.log(name + ' answered poorly');
    alert("You've answered poorly " + name);
    quest6();
  } else {
    //console.log(name + ' answered correctly');
    alert("Congratulations " + name + "! You're correct!");
    AnsCounter++;
    quest6();
  }
}

//Last question regaring the quiz
function quest6() {
  var q6 = prompt('Is Baloo in the Jungle book? "Yes or No?"');

  //reformatting answer to something understandable
  var q6edit = q6.toLowerCase();

  //validating user's input
  if (q6edit !== "no" && q6edit !== "n" && q6edit !== "yes" && q6edit !== "y") {
    q6 = prompt('Answer the question with a "Yes or No"');
    q6edit = q6.toLowerCase();
  }

  //checking to see if answer is correct
  if (q6edit === "no" || q6edit === "n") {
    //console.log(name + ' answered poorly');
    alert("You've answered poorly " + name);
    quest7();
  } else {
    //console.log(name + ' answered correctly');
    alert("Congratulations " + name + "! You're correct!");
    AnsCounter++;
    quest7();
  }
}

//------ Lab03 Portion ------
// Using a loop I will see if the user can predict the number
// But first have to prompt the user

function quest7() {
  var play = confirm("Hey" + name + ", Do you want to play a game?");
  //saving it
  console.log("This was saved: " + play);

  //Letting User Know what's about to happen

  if (play == true) {
    alert(
      "Great! I'm thinking of a number between 1 and 10. Can you guess it?"
    );
  } else {
    alert("Spoilsport");
  }

  // getting a  random number and assigning it to a varible
  var rando = Math.round(Math.random() * 10);
  var count;
  var guess;

  //variables assigned now for the Lightning Round
  for (count = 0; count < 4; count++) {
    // Seeing if user has the right guess
    guess = parseInt(prompt("Ok, " + name + " What's your guess?"));

    if (guess > rando) {
      alert("Oh! So Close! Just a bit too high...Try again");
    } else {
      if (guess < rando) {
        alert("Oh! Soo Soo Close! Just a bit too low...Try again");
      } else {
        if (guess === rando) {
          alert("Holy Cow! You've guessed it!");
          AnsCounter++;
          break;
        }
      }
    }
  }
}

quest8();

//Last game of the lab
//prompting user to play

function quest8() {
  var LinuxDistros = [
    "MX Linux",
    "Manjaro",
    "Linux Mint",
    "Ubuntu",
    "Debian",
    "Elementary OS",
    "Solus",
    "Zorin OS",
    "Fedora",
    "Deepin"
  ];

  var guessLinux = prompt(
    "Ok" + name + ", last game. Just try and guess which linux distro I use"
  );

  //Next comes the loops to iterate through the array
  var attempts = 0;
  var allowedAttempts = 5;

  // option to change user inpout into all lowcase
  // guessLinux = guessLinux.toLowerCase();

  while (attempts < allowedAttempts) {
    //need to fix the below code it needs to have another loop to get through all the arrays

    if (LinuxDistros.indexOf(guessLinux) !== -1) {
      alert("Great Job!");
      AnsCounter++;
      break;
    } else {
      guessLinux = prompt("Oh No, sorry! try again please");
      attempts++;
    }
  }

  alert("You answered " + AnsCounter + " correctly. Good work.");
}
