

"use strict";

const minNum = 1;
const maxNum = 100;

// Correctly capitalize Math and math
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

while (running) {
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a number between " + minNum + " and " + maxNum);
    } else {
        attempts++;
        if (guess > answer) {
            window.alert("Too high. Try guessing lower!");
        } else if (guess < answer) {
            window.alert("Too low. Try guessing higher!");
        } else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;  // End the loop when the guess is correct
        }
    }
}


//credit Bro Code on YouTube