"use strict"

//for20
//Дано целое число N (> 0). Используя один цикл, найти сумму "1! + 2! + 3! + ... + N!

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

const N = getRandomIntInterval(1, 10);
console.log("N = " + N);

const sumFactorial = function (a) {
    let k = 1;
    let z = 0;
    for (let i = 1; i <= a; i++) {
        k *= i;
        z += k;
    }
    return z;
}

console.log("1! + 2! + 3! + ... + N! = " + sumFactorial(N))

//time 20min
