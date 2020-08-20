"use strict"

//For8
//Даны два целых числа A и B (A < B). Найти произведение всех целых чисел от A до B включительно.

const {getRandomIntInterval} = require('./utils');

let a = getRandomIntInterval(-10,10);
let b = getRandomIntInterval(11,20);
let c = 1;

console.log("Число А: " + a + " Числов B: " + b);

for (; a <= b; a++) {
    c = c * a;
}

console.log("Произведение всех целых чисел от A до B включительно: " + c);

//time 15min
