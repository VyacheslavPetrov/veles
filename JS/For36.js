"use strict"

//for36
//Даны целые положительные числа N и K. Найти сумму "1^K + 2^K +...+ N^K"

const {getRandomIntInterval} = require('./utils') // Импортируем функции из файла utils.js

const N = getRandomIntInterval(1,10),
K = getRandomIntInterval(1, 10);
let x = 0;
console.log("N = " + N);
console.log("K = " + K);
for(let i = 1; i <= N; i++){
    x += Math.pow(i, K);
}
console.log("Cуммa 1^K + 2^K +...+ N^K = " + x);

//time 15min