"use strict"

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(someString) ==! 'string') {
        return "Ошибка!";
    }
    return str.split('').reverse().join('');
}

reverse(someString);
// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {

// }
console.log('Reversed:', reverse(someString));

// console.log(reverse(someString));