"use strict"

//while17
//Дано целое число N (>0).
// Используя операции деления нацело и взятия остатка от деления,
// вывести все его цифры, начиная с самой правой (разряда единиц)

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

let n = getRandomIntInterval(1, 1000);
console.log(n)
while ((n / 10) > 0){
    console.log(n % 10);
    n = Math.floor(n / 10);
}

//time 15min
