'use strict';

// Asking for the user's name, logging the user's name in to the console, and greeting the user

let usersName = prompt('What is your name?');
alert('Hello, ' + usersName + '! Welcome to my page! Let\'s break the ice with a little guessing game! For questions 1-5, please answer "Yes/No" or "Y/N".');

// Starting the user with a score of 0
let usersScore = 0;

hobby();

// Question 1
function hobby() {
  let question1 = prompt('Is playing video games a hobby of mine?');
  question1 = question1.toLowerCase();

  if (question1 === 'yes' || question1 === 'y') {
    alert('Ding! You are correct! I love playing video games!');
    usersScore++;
  } else if (question1 === 'no' || question1 === 'n') {
    alert('Womp womp... Wrong! I love playing video games.');
  } else {
    alert('You did not answer "Yes/No" or "Y/N".');
  }
}

pets();
// Question 2
function pets() {
  let question2 = prompt('Do I have any pets?');
  question2 = question2.toLowerCase();

  if (question2 === 'yes' || question2 === 'y') {
    alert('You are right! I have 2 cats! Their names are Shadow and Onyx.');
    usersScore++;
  } else if (question2 === 'no' || question2 === 'n') {
    alert('Sorry, you are wrong. I have 2 cats. Their names are Onyx and Shadow.');
  } else {
    alert('You did not answer "Yes/No" or "Y/N".');
  }
}

seafood();
// Question 3
function seafood() {
  let question3 = prompt('Do I like seafood?');
  question3 = question3.toLowerCase();

  if (question3 === 'yes' || question3 === 'y') {
    alert('Eww No. Seafood is not for me!');
  } else if (question3 === 'no' || question3 === 'n') {
    alert('Bingo! Fishy food is no bueno...');
    usersScore++;
  } else {
    alert('You did not answer "Yes/No" or "Y/N.');
  }
}

math();
// Question 4
function math() {
  let question4 = prompt('Do I like math?');
  question4 = question4.toLowerCase();

  if (question4 === 'yes' || question4 === 'y') {
    alert('Yup! I love the logic behind math!');
    usersScore++;
  } else if (question4 === 'no' || question4 === 'n') {
    alert('Wrong! I know a lot people hate math, but I love it!');
  } else {
    alert('You did not answer "Yes/No" or "Y/N.');
  }
}

travel();
// Question 5
function travel() {

  let question5 = prompt('Have I traveled outside of the country before?');
  question5 = question5.toLowerCase();

  if (question5 === 'yes' || question5 === 'y') {
    alert('Sadly no... I would love to visit Tokyo, Japan for my first time!');
  } else if (question5 === 'no' || question5 === 'n') {
    alert('You are correct, I haven\'t traveled yet but I will. I hope to go Tokyo, Japan one day!');
    usersScore++;
  } else {
    alert('You did not answer "Yes/No" or "Y/N.');
  }
}
// Delcaring my number with the value 6 as a string and delcaring a variable question 6.

const myNumber = 6;
let question6;

secretNumber();
// Question 6 - This is a for loop that asks the user to guess a number that I am thinking. If the user guesses wrong, they are alerted and told how many guesses they have left. After 4 wrong guesses, the loop ends and the user is given the correct answer.
function secretNumber() {

  for (let i = 3; i >= 0; i--) {
    let question6 = parseInt(prompt('Can you guess the number I am thinking from 1 to 10?'));
    if (question6 === myNumber) {
      alert('Bingo! You guessed it!');
      usersScore++;
      break;
    } else if (question6 < myNumber) {
      alert('Too low, you have ' + i + ' guesses left!');
    } else if (question6 > myNumber) {
      alert('Too high, you have ' + i + ' guesses left!');
    } else {
      alert('That\'s not a number!');
    }
  }
}

if (question6 !== myNumber) {
  alert('The number I was thinking was: ' + myNumber);
}

// declaring a variable named favShow and assigning the value as an array of my favorite shows as strings.

let favShow = ['bojack horseman', 'attack on titan', 'black sails', 'castlevania'];

myShows();
// Question 7 - This is a for loop that loops a max of 6 times. The user is asked to guess a favorite show of mine from a list provided on in the prompt window. If the user guesses wrong, they are alerted and told how many guesses they have left. After 6 wrong guesses, the loop ends.
function myShows() {

  for (let i = 5; i > 0; i--) {
    let question7A = prompt('Which of the following shows are my favorite? Please choose one: "Game of Thrones", "Naruto", "BoJack Horseman", "The Walking Dead", "House of Cards", "Breaking Bad", "Attack on Titan", "Black Sails", "Orange is the New Black", "Castlevania"');
    question7A = question7A.toLowerCase();

    // 1. delcares a new variable named "question7B" and gives it the false vaule.
    let question7B = false;

    // 2. runs a for loop that runs through each item in the array named favShow.
    for (let j = 0; j < favShow.length; j++) {
      // 3. Evaulates if the users answer matches any of the items in the array for favShow and reassigns the value of quesition7B to true if it does.
      if (question7A === favShow[j]) {
        question7B = true;
      }
    }

    // 4. Final if statement that checks if question7B is true or false. If true, the user sees an alert that tells them their guess if corrent and they gain a point and the loop breaks. If false, they are alerted and told how many guesses they have left
    if (question7B) {
      alert('Yes! You are right!');
      usersScore++;
      break;
    } else {
      alert('No! You have ' + i + ' guesses left!');
    }
  }
}
// thanks the user for playing the game.

alert('Thanks for playing, ' + usersName + '! I hope you had fun learning a little about me! Click "OK" to view your score!');

// alerts the user of their score

if (usersScore === 7) {
  alert ('You guessed correctly on every question! Way to go!!');
} else if (usersScore === 5 || usersScore === 6) {
  alert ('You guessed ' + usersScore + ' out of 7 questions correctly. Pretty good!');
} else if (usersScore === 3 || usersScore === 4) {
  alert ('You guessed ' + usersScore + ' out of 7 questions correctly. Not too shabby.');
} else if (usersScore === 1 || usersScore === 2) {
  alert ('You guessed ' + usersScore + ' out of 7 questions correctly. You can do better than that!');
} else {
  alert('Oh no, you didnt guess any of the questions correctly...');
}
