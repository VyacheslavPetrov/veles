"use strict"

//for22
//Дано вещественное число X и целое число N (>0). Найти значение выражения "1+X +X^2/(2!)+...+X^N/(N!)"

const {getRandomFloatInterval, getRandomIntInterval} = require('../utils');

const X = getRandomFloatInterval(-10,10),
N = getRandomIntInterval(1,10);
let k = 1;
let z = 1;
console.log("X = " + X);
console.log("N = " + N);
for (let i = 1; i <= N; i++) {
    k *= i;
    z += const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

    const N = getRandomIntInterval(1, 10);/k;
}
console.log("Значение выражения 1+X +X^2/(2!)+...+X^N/(N!) = " + z);

//time 20min