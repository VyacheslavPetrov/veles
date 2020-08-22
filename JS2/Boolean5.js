"use strict"

//boolean5
//Даны два целых числа: A, B. Проверить истинность высказывания: «Справедливы неравенства A ≥ 0 или B < −2».

const {getRandomIntInterval} = require('../utils');

const A = getRandomIntInterval(-1000,1000),
B = getRandomIntInterval(-1000,1000);
console.log("Даны числа: " + A + " и " + B);
if (A >= 0 || B < -2) {
    console.log("Неравенства A ≥ 0 или B < −2 верны.")
} else {
    console.log("Неравенства A ≥ 0 или B < −2 не верны.")
}

//time 5min