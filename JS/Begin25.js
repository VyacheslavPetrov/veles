"use strict"

//Begin25
//Найти значение функции "y=3x−6x−7" при данном значении "x".

const {getRandomFloatInterval} = require('./utils') // Импортируем функции из файла utils.js

const x = getRandomFloatInterval(-1000,1000)

const y = (3 * x) - (6 * x) - 7
console.log("Если x = " + x + " , то y = 3 x − 6 x − 7 = " + y)

//time 5min