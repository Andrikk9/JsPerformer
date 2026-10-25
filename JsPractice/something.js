"use strict"

// console.log(pow(2, 4));

// function pow(x, n) {
//     if (n === 1) {
//         return x;
//     } else {
//         return x * pow(x, n - 1);
//     }
// }

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }

//     return result;
// }

// function factorial(of) {
//     if (of == 1 || of == 0) {
//         return 1;
//     } else {
//         return of * factorial(of - 1);
//     }
// }

// console.log(factorial(5));

// function factorial(n) {
//     if (typeof(n) !== 'number' || !Number.isInteger(n)) {
//         return "Ошибка, проверьте данные";
//     }

//     if (n >= 1) {
//         return n * factorial(n - 1);
//     } else {
//         return 1;
//     }

//     // Более короткий вариант, который вы можете встретить
//     // Но не учитывает отрицательные значения
//     // return n ? n * factorial(n - 1) : 1;
// }

// factorial(5);
const readline = require("readline/promises");

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const MARGIN = 3;

async function getGuess() {
    while (true) {
        const text = await rl.question(`Guess a number between ${MIN_NUMBER} and ${MAX_NUMBER}: `);
        if (!/^\d+$/.test(text.trim())) {
            console.log("Please enter a whole number.");
            continue;
        }
        const guess = Number(text);
        if (guess >= MIN_NUMBER && guess <= MAX_NUMBER) {
            return guess;
        }
        console.log(`The number must be between ${MIN_NUMBER} and ${MAX_NUMBER}.`);
    }
}

async function play() {
    const secret = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;
    const guess = await getGuess();
    const difference = Math.abs(secret - guess);

    console.log(`The secret number was ${secret}.`);
    if (difference === 0) {
        console.log("Jackpot! You guessed it exactly!");
    } else if (difference <= MARGIN) {
        console.log(`You win! You were only ${difference} away (allowed margin is ±${MARGIN}).`);
    } else if (difference <= 8) {
        console.log(`Don't be upset, you were just ${difference} away (allowed margin is ±${MARGIN}).`);
    } else {
        console.log(`You lose. You were ${difference} away.`);
    }
}

async function main() {
    console.log("=== Lottery ===");
    while (true) {
        await play();
        const again = await rl.question("Play again? (y/n): ");
        if (again.trim().toLowerCase() !== "y") {
            console.log("Thanks for playing!");
            break;
        }
    }
    rl.close();
}

main();
