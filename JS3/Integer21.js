"use strict"

//Integer21
//С начала суток прошло N секунд (N — целое). Найти количество секунд, прошедших с начала последней минуты.

const {getRandomIntInterval} = require('../utils');

const N = getRandomIntInterval(1,1000),
seconds = Math.floor(N % 60);
console.log("С начала суток прошло: " + N);
console.log("Количество секунд, прошедших с начала последней минуты: " + seconds);

//time 5min
