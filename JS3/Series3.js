"use strict"

//series3
//Даны десять вещественных чисел. Найти их среднее арифметическое.

const {getRandomFloatInterval} = require('../utils');

const a = getRandomFloatInterval(1,10),
    b = getRandomFloatInterval(1,10),
    c = getRandomFloatInterval(1,10),
    d = getRandomFloatInterval(1,10),
    e = getRandomFloatInterval(1,10),
    f = getRandomFloatInterval(1,10),
    k = getRandomFloatInterval(1,10),
    n = getRandomFloatInterval(1,10),
    p = getRandomFloatInterval(1,10),
    arr = [a, b, c, d, e, f, k, n, p],
    result = 0;
let mult = 0;
for(let i = 0; i < arr.length; i++){
    mult += arr[i];
}
console.log("Даны числа: " + arr);
console.log("Их среднее арифметическое равно = " + (mult / (arr.length + 1)));

//time 5min