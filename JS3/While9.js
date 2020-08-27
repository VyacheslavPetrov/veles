"use strict"

//while9
//Дано целое число N (>1). Найти наименьшее целое число K, при котором выполняется неравенство: 3^K > N.

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

const N = getRandomIntInterval(1, 100);

let k = 1;
console.log("N = " + N)
while(Math.pow(3, k) <= N){
    k++;
}
console.log("Наименьшее целое положительное число K, при котором выполняется неравенство: 3^K > N = " + k);

//time 5min