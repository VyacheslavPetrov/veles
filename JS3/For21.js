"use strict"

//for21
//Дано целое число N (> 0).
// Используя один цикл, найти сумму "1 + 1/(1!) + 1/(2!) + 1/(3!) + ... + 1/(N!)"
// (выражение N! — N–факториал — обозначает произведение всех целых чисел от 1 до N: "N! = 1·2·...·N").
// Полученное число является приближенным значением константы e = exp(1).

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

const N = getRandomIntInterval(1, 10);
console.log("N = " + N);

const Exp = function (a) {
    let k = 1;
    let z = 1;
    for (let i = 1; i <= a; i++) {
        k *= i;
        z += 1/k;
    }
    return z;
}

console.log("1 + 1/(1!) + 1/(2!) + 1/(3!) + ... + 1/(N!) = " + Exp(N))

//time 5min