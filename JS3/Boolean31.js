"use strict"

//Boolean31
//Даны целые числа a, b, c, являющиеся сторонами некоторого треугольника.
// Проверить истинность высказывания: «Треугольник со сторонами a, b, c является равнобедренным».

const {getRandomIntInterval} = require('../utils');

const a = getRandomIntInterval(10,20),
b = getRandomIntInterval(10,20),
c = getRandomIntInterval(10,20);
if((a === b && a < c) || (b === c && c < a) || (a === c && a < b)) {
    console.log("Треугольник со сторонами a = " + a + " , b = " + b + " , c = " + c + " - является равнобедренным")
} else {
    console.log("Треугольник со сторонами a = " + a + " , b = " + b + " , c = " + c + " - НЕ является равнобедренным")
}