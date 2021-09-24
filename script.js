'use strict';

//Selecting elements defined once at top of file
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//create state variable to determine if the game is being played or not
//if playing the buttons are clickable
//if not then buttons aren't clickable
let playing = true;

const switchPlayer = function () {
  //Switch to next player and reset current score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//Rolling Dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1.Generate a random number (dice roll) 1-6
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display the dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    //3. Check for rolled 1;
    if (dice != 1) {
      //Add dice to the current score
      currentScore += dice;
      //Selecting the score element dynamically based on which player is active right now
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to the total score of active player
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //check if score is >=100
    if (scores[activePlayer] >= 10) {
      //if score >=100 current player wins the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else {
      //else switch players
      switchPlayer();
    }
  }
});
