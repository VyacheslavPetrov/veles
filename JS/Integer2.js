"use strict"

//Integer 2
/*Дана масса "M" в килограммах. Используя операцию деления нацело,
 найти количество полных тонн в ней (1 тонна = 1000 кг).
 */

const {getRandomIntInterval} = require('./utils');

const M = getRandomIntInterval(0,1000000);
const T = parseInt (M / 1000);
console.log("Если М = " + M + " кг" + " , то полных тонн получится Т = " + T +" тонн")

/*
Второй вариант
const E = ((M - (M % 1000)) / 1000);
 */
//time 10min