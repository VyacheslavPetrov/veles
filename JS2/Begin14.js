"use strict"

//Begin14
//Дана длина L окружности. Найти ее радиус R и площадь S круга,
//ограниченного этой окружностью, учитывая, что L = 2πR, S = π*R^2 .
// В качестве значения π использовать 3.14.

const {getRandomFloatInterval} = require('../utils') // Импортируем функции из файла utils.js

const L = getRandomFloatInterval(1,100);

let R = L / (2 * 3.14);
let S = 3.14 * Math.pow(R, 2);
console.log("Длина окружности L = " + L);
console.log("Радиус окружности = " + R);
console.log("Площадь круга = " + S);

//time 5min