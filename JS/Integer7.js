"use strict"

//Integer7
//Дано двузначное число. Найти сумму и произведение его цифр.

const {getRandomIntInterval} = require('./utils');

const i = getRandomIntInterval(10,99);

let a = Math.floor(i/10);
let b = i % 10;
let c = a + b;
let d = a * b;

console.log ("Если x = " + i + " , тогда сумма его цифр = " + c + " , а произведение = " + d);

//time 5min