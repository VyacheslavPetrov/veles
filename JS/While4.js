"use strict"

//while 4
//Дано целое число N (> 0). Если оно является степенью числа 3,
// то вывести TRUE, если не является — вывести FALSE.

const {getRandomIntInterval} = require('./utils') // Импортируем функции из файла utils.js

const N = getRandomIntInterval(1,30);
let i = 1;
console.log(N)
while (N > i) {
    i = i * 3;
}
console.log(i === N);

//time 60min