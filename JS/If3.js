'use strict'

//if3
/*Дано целое число. Если оно является положительным, то прибавить к нему 1;
 если отрицательным, то вычесть из него 2; если нулевым, то заменить его на 10.
 Вывести полученное число.
 */

const {getRandomIntInterval} = require('./utils');

let x = getRandomIntInterval(-1000,1000);
console.log ("Дано: " + x)

if ( x > 0 ) {
    x = x + 1;
} else if ( x < 0) {
    x = x - 2;
} else {
    x = 10;
}

console.log ("Полученное число: " + x);

//time 5 min