"use strict"

//while7
//Дано целое число N (> 0). Найти наименьшее целое положительное число K, квадрат которого превосходит N: K^2 > N

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

const N = getRandomIntInterval(1, 100);
let k = 1;
console.log("N = " + N)
while(Math.pow(k, 2) <= N){
    k++;
}
console.log("Наименьшее целое положительное число K, квадрат которого превосходит N: K^2 > N = " + k);

//time 5min