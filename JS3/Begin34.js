"use strict"

//Begin34
//Известно, что X кг шоколадных конфет стоит A рублей,
// а Y кг ирисок стоит B рублей.
// Определить, сколько стоит 1 кг шоколадных конфет,
// 1 кг ирисок, а также во сколько раз шоколадные конфеты дороже ирисок.

const {getRandomFloatInterval} = require('../utils') // Импортируем функции из файла utils.js

const A = getRandomFloatInterval(1, 100),
X = getRandomFloatInterval(0, 3),
Y = getRandomFloatInterval(0, 3),
B = getRandomFloatInterval(1, 100),
priceX = A / X,
priceY = B / Y,
difXY = priceX / priceY;
console.log("Если 1кг шололадных конфет стоит " + priceX + ", а кг ирисок стоит " + priceY + ", то шоколадные конфеты дороже ирисок в " + difXY)