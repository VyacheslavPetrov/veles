"use strict"

//for10 homework 2
//Дано целое число N (> 0). Найти "N! = 1·2·...·N" (N–факториал).

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

const N = getRandomIntInterval(1, 10);
console.log("N = " + N)

const factorial = function (a) { // KISS, если значение не меняется, то используй константы
    let k = 1; // SOLID, Если данные нужны только в функции, то инкапсулируй их в ней
    for (let i = 1; i <= a; i++) {
        k *= i;
    }
    return k;
}
console.log("N! = " + factorial(N));

//time 15min