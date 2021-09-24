'use strict';

//Selecting elements defined once at top of file
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

//Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  //1.Generate a random number (dice roll) 1-6
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display the dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3. Check for rolled 1;
  if (dice != 1) {
    //Add dice to the current score
    currentScore += dice;
    currentScore0El.textContent = currentScore; //Change Later for both players - who is active!
  } else {
    //Switch to next player
  }
});
