"use strict"

// Begin8
// Даны два числа a и b. Найти их среднее арифметическое: "(a + b)/2"

const {getRandomFloatInterval} = require('../utils') // Импортируем функции из файла utils.js

const a = getRandomFloatInterval(-1000, 1000), b = getRandomFloatInterval(-1000, 1000)

const average = (a + b)/2
console.log("Среднее: " + average," a: " + a, " b: " + b )

// time 2 минуты