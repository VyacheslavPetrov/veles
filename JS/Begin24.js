"use strict"

//Begin24
/*Даны переменные A, B, C. Изменить их значения, переместив содержимое
 "A" в "C", "C" в "B", "B" в "A", и вывести новые значения переменных "A", "B", "C".
 */

const {getRandomFloatInterval} = require('./utils'); // Импортируем функции из файла utils.js

let A = getRandomFloatInterval(-1000, 1000);
let B = getRandomFloatInterval(-1000, 1000);
let C = getRandomFloatInterval(-1000, 1000);
console.log(A, B, C);

let d, e, f;
d = A;
e = B;
f = C;

A = e;
B = f;
C = d;
console.log(A, B, C);

//time 5min