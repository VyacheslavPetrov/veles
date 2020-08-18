"use strict"

// Begin12
//Даны катеты прямоугольного треугольника a и b. Найти его гипотенузу "C" и периметр "P": "C=a+b", "P=a+b+С".

const {getRandomFloatInterval} = require('./utils'); // Импортируем функции из файла utils.js

const a = getRandomFloatInterval(0, 1000), b = getRandomFloatInterval(0, 1000);
const c = Math.sqrt((a * a) + (b * b)) //Если все же брать по ТЗ, то гипотенуза будет равна const c = a + b;
const p = a + b + c;

console.log("Если в прямоугольном треугольнике катеты a = " + a + " b = " + b + ", то гипотенуза c = " + c + "а периметр p = " + p);

//time 5min