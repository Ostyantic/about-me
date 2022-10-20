'use strict';

let usersName = prompt('What is your name?');
console.log('The users name is: ', usersName);
alert('Hello, ' + usersName + '! Welcome to my page! Let us break the ice with a little guessing game! Please answer "Yes" or "No".');

let usersScore = 0;

let userAnswer1 = prompt('Is playing video games a hobby of mine?');
userAnswer1 = userAnswer1.toLowerCase();
console.log('The users answer to question 1 is: ', userAnswer1);

if (userAnswer1 === 'yes') {
  alert('Ding! You are correct! I love playing video games!');
  usersScore = usersScore + 1;
} else if (userAnswer1 === 'no') {
  alert('Womp womp... Wrong! I love playing video games.');
} else {
  alert('You did not answer "Yes" or "No".');
}

let userAnswer2 = prompt('Do I have any pets?');
userAnswer2 = userAnswer2.toLowerCase();
console.log('The users answer to question 2 is: ', userAnswer2);

if (userAnswer2 === 'yes') {
  alert('You are right! I have 2 cats!');
  usersScore = usersScore + 1;
} else if (userAnswer2 === 'no') {
  alert('Sorry, you are wrong. I have 2 cats.');
} else {
  alert('You did not answer "Yes" or "No".');
}

let userAnswer3 = prompt('Do I like seafood?');
userAnswer3 = userAnswer3.toLowerCase();
console.log('The users answer to question 3 is: ', userAnswer3);

if (userAnswer3 === 'yes') {
  alert('Eww No. Seafood is not for me!');
} else if (userAnswer3 === 'no') {
  alert('Bingo! Fishy food is no bueno...');
  usersScore = usersScore + 1;
} else {
  alert('You did not answer "Yes" or "No".');
}

let userAnswer4 = prompt('Do I like math?');
userAnswer4 = userAnswer4.toLowerCase();
console.log('The users answer to question 4 is: ', userAnswer4);

if (userAnswer4 === 'yes') {
  alert('Yup! Math is so much fun!');
  usersScore = usersScore + 1;
} else if (userAnswer4 === 'no') {
  alert('Wrong! I know a lot people hate math, but I love it!');
} else {
  alert('You did not answer "Yes" or "No".');
}

let userAnswer5 = prompt('Have I traveled outside of the country before?');
userAnswer5 = userAnswer5.toLowerCase();
console.log('The users answer to question 5 is: ', userAnswer5);

if (userAnswer5 === 'yes') {
  alert('Sadly no... I would love to visit Tokyo, Japan for my first time!');
} else if (userAnswer5 === 'no') {
  alert('You are correct, I havent traveled yet but I will. I hope to go Tokyo, Japan one day!');
  usersScore = usersScore + 1;
} else {
  alert('You did not answer "Yes" or "No".');
}

alert('Thanks for playing, ' + usersName + '! I hope you had fun learning a little about me! Click "OK" to view your score!');

if (usersScore === 5) {
  alert ('You guessed correctly on every question! Way to go!!');
} else if (usersScore === 4) {
  alert ('You guessed ' + usersScore + ' out of 5 questions correctly. Pretty good!');
} else if (usersScore === 3) {
  alert ('You guessed ' + usersScore + ' out of 5 questions correctly. Not to shabby.');
} else if (usersScore === 2 || usersScore === 1) {
  alert ('You guessed ' + usersScore + ' out of 5 questions correctly. You can do better than that!');
} else {
  alert('Oh no, you didnt guess any of the questions correctly...')
}

// let userAnswer2 = prompt('What is your favorite game to play?');
// console.log(userAnswer2);

// let userAnswer3 = prompt('What is your favorite food?');
// console.log(userAnswer3);

// let userAnswer4 = prompt('What is your favorite color?');
// console.log(userAnswer4);

// alert('Hello, ' + userAnswer1 + ', in ' + userAnswer2 + '! ' + userAnswer3 + ' sound delicious! ' + userAnswer4 + ' is a really nice color!');
