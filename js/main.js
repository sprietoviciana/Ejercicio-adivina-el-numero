"use strict";

const input = document.querySelector(".js-input");
const button = document.querySelector(".js-button");
const clue = document.querySelector(".js-clue");
const numberTry = document.querySelector(".js-try");

const randomNumber = getRandomNumber(100);
let tries = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function incrementTries() {
  tries++;
  numberTry.innerHTML = tries;
}

function handleclick(event) {
  event.preventDefault();
  const inputNumber = parseInt(input.value);

  incrementTries();

  if (isNaN(inputNumber) || inputNumber > 100 || inputNumber < 1) {
    clue.innerHTML = "El número debe estar entre 1 y 100.";
  } else if (inputNumber > randomNumber) {
    clue.innerHTML = "Demasiado alto.";
  } else if (inputNumber < randomNumber) {
    clue.innerHTML = "Demasiado bajo.";
  } else {
    clue.innerHTML = "Has ganado campeona!!!";
  }
}

button.addEventListener("click", handleclick);
