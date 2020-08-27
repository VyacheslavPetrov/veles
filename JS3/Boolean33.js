"use strict"

//Boolean33
//Даны целые числа a, b, c.
// Проверить истинность высказывания: «Существует треугольник со сторонами a, b, c».

const {getRandomIntInterval} = require('../utils');

const a = getRandomIntInterval(1,20),
b = getRandomIntInterval(1,20),
c = getRandomIntInterval(1,20);
if((a > (c + b) && a > Math.abs(b - c)) || (b > (c + a) && b > Math.abs(a - c)) || (c > (a + b) && c > Math.abs(b - a))) {
    console.log(true + ". Треугольник со сторонами " + a + " " + b + " " + c + " существует")
} else {
    console.log(false + ". Треугольника со сторонами " + a + " " + b + " " + c + " НЕ существует")
}

//time 15min