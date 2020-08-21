"use strict"

//For7
//Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.

const {getRandomIntInterval} = require('./utils');

let a = getRandomIntInterval(-10,10),
b = getRandomIntInterval(11,20),
c = 0;
console.log("Число А: " + a + " Числов B: " + b);
for (let i = 0; a <= b; a++) {
    c += a;
}
console.log("Сумма всех целых чисел от A до B включительно: " + c);

//time 15min