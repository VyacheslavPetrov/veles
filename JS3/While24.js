"use strict"

//while24
//Дано целое число N (> 1). Проверить, является ли число N числом Фибоначчи.
// Если является, то вывести TRUE, если нет — вывести FALSE.
// Последовательность чисел Фибоначчи (FK) определяется следующим образом:
// "F[1] = 1, F[2] = 1, F[3] = F[1] + F[2], F[4] = F[2] + F[3] ...
// где сами числа = 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144..."

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

const n = getRandomIntInterval(1, 100);

console.log("N = " + n)
let checkFib = function (a) {
    let fib = 1,
    x = 1;
    while(n > fib) {
        fib += x;
        x = fib - x;
    }
    if(fib === n){
        return true;
    } else {
        return false;
    }
}
console.log(checkFib(n));

//time 15min
