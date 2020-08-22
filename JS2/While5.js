"use strict"

//while 5
//Дано целое число N (> 0), являющееся некоторой степенью числа 2.
// Найти целое число K — показатель этой степени.

const N = 32768;
let k = 0,
i = 1;
console.log("N =" + N)
while (N > i) {
    i = i * 2;
    k++;
}
console.log("Число " + N + " === 2^" + k);

//time 5min
