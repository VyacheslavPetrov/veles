"use strict"

//if4
//Даны три целых числа. Найти количество положительных чисел в исходном наборе.

const {getRandomIntInterval} = require('./utils');

const A = getRandomIntInterval(-1000,1000),
B = getRandomIntInterval(-1000,1000),
C = getRandomIntInterval(-1000,1000);
let list = [A, B, C],
positive = 0;
console.log("Даны числа: " + A + ", " + B + ", " + C);
for (let i = 0; i <= list.length; i++) {
    if(list[i] > 0){
        positive++;
    }
}
console.log("Количество положительных чисел равно: " + positive);

//time 5min