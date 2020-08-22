"use strict"

//for16
//Дано вещественное число A и целое число N (>0). Используя один цикл, вывести все целые степени числа A от 1 до N.

const {getRandomFloatInterval, getRandomIntInterval} = require('../utils') // KISS, из одного файла - один импорт


const A = getRandomFloatInterval(-10, 10),
N = getRandomIntInterval(1, 10);
console.log("А = " + A);
console.log("N = " + N);
for (let i = 1; i <= N; i++) {
    console.log("А^" + i + " = " + Math.pow(A, i));
}

//time 10min