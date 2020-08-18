"use strict"

//For2
/*Даны два целых числа A и B (A < B).
Вывести в порядке возрастания все целые числа, расположенные между A и B (включая сами числа A и B)
, а также количество N этих чисел.
 */

const {getRandomIntInterval} = require('./utils');

let a = getRandomIntInterval(1,10);
const b = getRandomIntInterval(11,20);
let n = 0;
console.log ("a = " + a + " b = " + b);
for (let i = 0; a <= b; i++ ) {
    console.log(a);
    a = a + 1;
    n++;
}
console.log("Количество чисел: " + n);

//time 10min
