"use strict"

//For7
//Даны два целых числа A и B (A < B). Найти сумму всех целых чисел от A до B включительно.

const {getRandomIntInterval} = require('../utils');

let a = getRandomIntInterval(-5,5),
b = getRandomIntInterval(6,9),
c = 0;
console.log("Число А: " + a + " Числов B: " + b);
for (; a <= b; a++) { // YAGNI i не нужен
    c += a;
}
console.log("Сумма всех целых чисел от A до B включительно: " + c);

//time 15min