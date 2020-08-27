"use strict"

//proc1
//Описать функцию PowerA3(A, B), вычисляющую третью степень числа A и возвращающую ее.

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

const A = getRandomIntInterval(1, 100);
console.log(A);
let PowerA3 = function (a) {
    return a * a * a;
}
console.log(PowerA3(A));

//time 5min