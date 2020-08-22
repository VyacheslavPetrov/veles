"use strict"

//Integer8
//Дано двузначное число. Вывести число, полученное при перестановке цифр исходного числа.

const {getRandomIntInterval} = require('../utils');

const i = getRandomIntInterval(10,99);
let a = Math.floor(i/10),
b = (i % 10) * 10,
d = b + a;
console.log("Дано число: " + i);
console.log("Число, полученное при перестановке цифр: " + d);

//time 5min