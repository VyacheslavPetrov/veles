"use strict"

//for17
//Дано вещественное число A и целое число N (>0). Используя один цикл, найти сумму "1 + A + A^2 + A^3 + ... + A^N"

const {getRandomFloatInterval, getRandomIntInterval} = require('../utils');

const A = getRandomFloatInterval(-10,10),
N = getRandomIntInterval(1,10);
console.log("N = " + N);
console.log("A = " + A);
let x = 1;
for(let i = 1; i <= N; i++){
    x += Math.pow(A, i);
}
console.log("Cуммa 1 + A + A^2 + A^3 + ... + A^N = " + x);