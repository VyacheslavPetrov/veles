"use strict"

//Boolean25

//Даны числа x, y. Проверить истинность высказывания:
// «Точка с координатами (x, y) лежит во второй координатной четверти».

const {getRandomIntInterval} = require('../utils');

const x = getRandomIntInterval(-1000,1000),
y = getRandomIntInterval(-1000,1000);

if (x < 0 && y > 0) {
    console.log("Точка с координатами (" + x + ", " + y + ") лежит во второй координатной четверти")
} else {
    console.log("Точка с координатами (" + x + ", " + y + ")  НЕ лежит во второй координатной четверти")
}

//time 5min