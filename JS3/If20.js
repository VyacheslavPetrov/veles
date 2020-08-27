"use strict"

//if20
//На числовой оси расположены три точки: A, B, C.
//Определить, какая из двух последних точек (B или C) расположена ближе к A,
// и вывести эту точку и ее расстояние от точки A.


const {getRandomFloatInterval} = require('../utils');

const a = getRandomFloatInterval(-100,100),
b = getRandomFloatInterval(-100,100),
c = getRandomFloatInterval(-100,100);
let closeB,
closeC;

if(a < 0 && b < 0){
    closeB = Math.abs(a) - Math.abs(b);
} else if((a > 0 && b < 0) || (a < 0 && b > 0)) {
    closeB = Math.abs(a) + Math.abs(b);
} else {
    closeB = Math.abs(a - b);
}

if(a < 0 && c < 0){
    closeC = Math.abs(a) - Math.abs(c);
} else if((a > 0 && c < 0) || (a < 0 && c > 0)) {
    closeC = Math.abs(a) + Math.abs(c);
} else {
    closeC = Math.abs(a - c);
}

console.log(`A = ${a}, B = ${b}, C = ${c}`)
if(closeB < closeC) {
    console.log("Точка B = " + b + " расположена ближе к точке А, и находится на расстоянии " + closeB);
} else if(closeB === closeC){
    console.log("Точки B и C расположены на одинаковом расстоянии до точки А, которое равно " + closeC);
} else {
    console.log("Точка C = " + c + " расположена ближе к точке А, и находится на расстоянии " + closeC);
}

//time 25min