"use strict";
const RollButton = document.querySelector(".RollDiceButton");
const HoldButton = document.querySelector(".HoldButton");
const NewGameButton = document.querySelector(".NewGameButton");
const currentScore_0 = document.querySelector(".currentScore_0");
const currentScore_1 = document.querySelector(".currentScore_1");
const PlayerOneScore = document.querySelector(".PlayerOneScore");
const PlayerTwoScore = document.querySelector(".PlayerTwoScore");
const Playerhead1 = document.querySelector(".playerHead1");
const Playerhead2 = document.querySelector(".playerHead2");
const DiceEl = document.querySelector(".diceImage");
const Box1 = document.querySelector(".pBox1");
const Box2 = document.querySelector(".pBox2");

let cs = 0,
  PS_0 = 0,
  PS_1 = 0;
currentScore_0.textContent = cs;
currentScore_1.textContent = cs;
let playerNumber = 0;

RollButton.addEventListener("click", function () {
  if (playerNumber == 0) {
    const rn = Math.trunc(Math.random() * 6) + 1;
    console.log(rn);
    DiceEl.src = `dice-${rn}.png`;
    DiceEl.classList.remove("hidden");
    if (rn == 1) {
      cs = 0;
      playerNumber = 1;
      currentScore_0.textContent = cs;
      Box1.classList.remove("activePlayer");
      Box2.classList.add("activePlayer");
    } else {
      cs = cs + rn;
      currentScore_0.textContent = cs;
    }
  } else if (playerNumber == 1) {
    const rn = Math.trunc(Math.random() * 6) + 1;
    console.log(rn);
    DiceEl.src = `dice-${rn}.png`;
    DiceEl.classList.remove("hidden");
    if (rn == 1) {
      cs = 0;
      playerNumber = 0;
      currentScore_1.textContent = cs;
      Box2.classList.remove("activePlayer");
      Box1.classList.add("activePlayer");
    } else {
      cs = cs + rn;
      currentScore_1.textContent = cs;
    }
  }
});

HoldButton.addEventListener("click", function () {
  if (playerNumber == 0) {
    PS_0 = PS_0 + cs;
    cs = 0;
    Box1.classList.remove("activePlayer");
    Box2.classList.add("activePlayer");
    PlayerOneScore.textContent = PS_0;
    if (PS_0 >= 100) {
      Playerhead1.textContent = "WINNER";
      Box1.classList.add("winnerColor");
      Box2.classList.remove("activePlayer");
    }
    currentScore_0.textContent = cs;
    playerNumber = 1;
  } else if (playerNumber == 1) {
    PS_1 = PS_1 + cs;
    cs = 0;
    Box2.classList.remove("activePlayer");
    Box1.classList.add("activePlayer");
    PlayerTwoScore.textContent = PS_1;
    if (PS_1 >= 100) {
      Playerhead2.textContent = "WINNER";
      Box2.classList.add("winnerColor");
      Box1.classList.remove("activePlayer");
    }
    currentScore_1.textContent = cs;
    playerNumber = 0;
  }
});

NewGameButton.addEventListener("click", function () {
  cs = 0;
  PS_0 = 0;
  PS_1 = 0;
  playerNumber = 0;
  currentScore_0.textContent = cs;
  currentScore_1.textContent = cs;
  PlayerOneScore.textContent = PS_0;
  PlayerTwoScore.textContent = PS_1;
  Playerhead1.textContent = "Player 1";
  Playerhead2.textContent = "Player 2";
  Box2.classList.remove("activePlayer");
  Box1.classList.add("activePlayer");
  Box2.classList.remove("winnerColor");
  Box1.classList.remove("winnerColor");
});
