"use strict"

//if19
/*Даны три целых числа, одно из которых отлично от двух других, равных между собой.
 Определить порядковый номер числа, отличного от остальных.
 */

const {getRandomIntInterval} = require('./utils');

const a = getRandomIntInterval(-1000,1000);
const b = getRandomIntInterval(-1000,1000);
const c = a;

if ( a === b) {
    console.log("Среди чисел " + a + " " + b + " " + c + " Отличным от других является число: " + c);
} else if (a === c) {
    console.log("Среди чисел " + a + " " + b + " " + c + " Отличным от других является число: " + b);
} else {
    console.log("Среди чисел " + a + " " + b + " " + c + " Отличным от других является число: " + a);
}

//time 1min. Задание 1 в 1 как в if18