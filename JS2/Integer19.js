"use strict"

//Integer19
//С начала суток прошло N секунд (N — целое). Найти количество полных минут, прошедших с начала суток.

const {getRandomIntInterval} = require('./utils');

const N = getRandomIntInterval(1,1000),
minutes = Math.floor(N / 60);
console.log("С начала суток прошло: " + N);
console.log("Количество полных минут: " + minutes);

//time 10min