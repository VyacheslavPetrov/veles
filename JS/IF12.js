"use strict"

//if12
//Даны три числа. Найти наименьшее из них.

const {getRandomIntInterval} = require('./utils');

const a = getRandomIntInterval(-1000,1000);
const b = getRandomIntInterval(-1000,1000);
const c = getRandomIntInterval(-1000,1000);

if (a === b || a === c || c === b) {
    if (a === b && a < c) {
        console.log("Среди чисел " + a + " " + b + " " + c + " Наименьшим числом является: " + a);
    } else if (a === b && a < c) {
        console.log("Среди чисел " + a + " " + b + " " + c + " Наименьшим числом является: " + c);
    } else if (a === c && a < b) {
        console.log("Среди чисел " + a + " " + b + " " + c + " Наименьшим числом является: " + a);
    } else if (a === c && a > b) {
        console.log("Среди чисел " + a + " " + b + " " + c + " Наименьшим числом является: " + b);
    } else if (c === b && c < a) {
        console.log("Среди чисел " + a + " " + b + " " + c + " Наименьшим числом является: " + b);
    } else {
        console.log("Среди чисел " + a + " " + b + " " + c + " Наименьшим числом является: " + a);
    }
} else if (a < b && a < c) {
    console.log("Среди чисел " + a + " " + b + " " + c + " Наименьшим числом является: " + a);
} else if (b < a && b < c) {
    console.log("Среди чисел " + a + " " + b + " " + c + " Наименьшим числом является: " + b);
} else if ( c < b && c < a) {
    console.log("Среди чисел " + a + " " + b + " " + c + " Наименьшим числом является: " + c);
}

//time 10min