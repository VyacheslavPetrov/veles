"use strict"

//if29
//Дано целое число. Вывести его строку-описание вида «отрицательное четное число»,
// «нулевое число», «положительное нечетное число» и т. д.

const {getRandomIntInterval} = require('../utils');

const N = getRandomIntInterval(-100, 100);
let x;
console.log(N);
if (N % 2 === 0) {
    x = "четное";
} else {
    x = "нечетное";
}
if(N < 0){
    console.log("Число N - отрицательное " + x + " число");
} else if (N === 0) {
    console.log("Число N - нулевое число")
} else {
    console.log("Число N - положительное " + x + " число")
}

//time 15min