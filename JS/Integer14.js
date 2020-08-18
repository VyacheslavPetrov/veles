"use strict"

//Integer14

//Дано трехзначное число. В нем зачеркнули первую справа цифру и приписали ее слева. Вывести полученное число.

const {getRandomIntInterval} = require('./utils');

const x = getRandomIntInterval(100,999);

let a = Math.floor(x / 100);
let b = x % 100;
let c = (b * 10) + a;
console.log ("If x = " + x + " then Number = " + c);

//time 6min
