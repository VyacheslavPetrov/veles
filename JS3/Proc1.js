"use strict"

//proc1
//Описать функцию PowerA3(A, B), вычисляющую третью степень числа A и возвращающую ее.

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

const A = getRandomIntInterval(1, 5);
console.log(A);

const PowerA3 = (a) => a * a * a

console.log(PowerA3(A));

//time 5min