"use strict"

//For5
//Дано вещественное число — цена 1 кг конфет. Вывести стоимость 0.1, 0.2, ..., 1 кг конфет.

const {getRandomFloatInterval} = require('./utils'); // Импортируем функции из файла utils.js

const A = getRandomFloatInterval(100, 1000);

for (let i = 0.1; i <= 1; i += 0.1) {
    let price = Math.floor(A * i);
    console.log(i.toFixed(1) + " кг конфет будет стоить: " + price + " руб.");
}

//time 15min