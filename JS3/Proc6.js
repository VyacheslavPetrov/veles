"use strict"

//proc6
//Описать функцию DigitCountSum(K, C, S),
// находящую количество C цифр целого положительного числа K,
//а также их сумму S (K — входной, C и S — выходные параметры целого типа).

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

let K = getRandomIntInterval(1, 100);
console.log(K);

let DigitCountSum = function (a) {
    let c = 0,
    v = K,
    sum = 0,
    z = [];
    while(K >= 1) {
        K = K / 10;
        c++;
    }
    let p = 1;
    while ((v / p) > 0) {
        z.push(v % 10);
        v = Math.floor(v / 10);
        p *= 10;
    }
    for(let i = 0; i < z.length; i++){
        sum += z[i];
    }
    return {C : c, S : sum};
}
console.log(DigitCountSum(K));

//time 45min

/*
let c = 0,
    v = K,
    sum = 0,
    z = [];
while(K > 1) {
    K = K / 10;
    c++;
}
console.log(c);
let p = 1;
while ((v / p) > 0) {
    z.push(v % 10);
    v = Math.floor(v / 10);
    p *= 10;
}

console.log(z)
for(let i = 0; i < z.length; i++){
    sum += z[i];
}
console.log(sum)

 */