"use strict"

//For10
//Дано целое число "N (> 0)". Найти сумму "1 + 1/2 + 1/3 + . . . + 1/N" (вещественное число).

const {getRandomIntInterval} = require('./utils');

let n = getRandomIntInterval(1,10);
console.log("Дано число N: " + n);
let k = 0;
for(let i = 1; i <= n; i++) {
    k += (1 / i);
}
console.log("Сумма 1 + 1/2 + . . . + 1/N равна: " + k.toFixed(3));