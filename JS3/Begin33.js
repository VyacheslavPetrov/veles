"use strict"

//Begin33
//Известно, что X кг конфет стоит A рублей. Определить, сколько стоит 1 кг и Y кг этих же конфет.

const {getRandomFloatInterval} = require('../utils') // Импортируем функции из файла utils.js

const A = getRandomFloatInterval(1, 100),
X = getRandomFloatInterval(0, 3),
Y = getRandomFloatInterval(0, 3),
price = A / X,
priceY = price * Y;
console.log("Если " + X + " кг конфет стоит " + A + ", то");
console.log("Цена 1кг этих конфет = " + price + ", а цена " + Y + " кг будет равна = " + priceY);

//time 10min