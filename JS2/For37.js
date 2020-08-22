"use strict"

//for37
//Дано целое число N (> 0). Найти сумму " 1^1 + 2^2 + ... +N^N "

const {getRandomIntInterval} = require('./utils') // Импортируем функции из файла utils.js

const N = getRandomIntInterval(1,10);
let x = 0;
console.log("N = " + N);

for(let i = 1; i <= N; i++){
    x += Math.pow(i, i);
}
console.log("Cуммa 1^1 + 2^2 +...+ N^N = " + x);

//time 3min