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

function handleclick(event) {
  event.preventDefault();
  const inputNumber = input.value;

  console.log(inputNumber);
}

button.addEventListener("click", handleclick);
