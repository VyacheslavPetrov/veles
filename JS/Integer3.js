"use strict"

//Integer3

/*Дан размер файла в байтах. Используя операцию деления нацело,
найти количество полных килобайтов, которые занимает данный файл (1 килобайт = 1024 байта).
 */

const {getRandomIntInterval} = require('./utils');

const M = getRandomIntInterval(0,1000000);
const T = Math.floor(M / 1024);
console.log("Если М = " + M + " байт" + " , то полных кБ получится Т = " + T +" кБ");

//time 3min