"use strict"

//begin11
//Даны два ненулевых числа. Найти сумму, разность, произведение и частное их модулей.

const {getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

const a = getRandomFloatInterval(1,100),
b = getRandomFloatInterval(1, 100);

console.log(a);
console.log(b);
console.log("Сумма: " + (a + b));
console.log("Разность: " + (a - b));
console.log("Произведение: " + (a * b));
console.log("Частное: " + (a / b));

//time 5min