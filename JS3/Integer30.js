"use strict"

//Integer30
//Дан номер некоторого года (целое положительное число).
// Определить соответствующий ему номер столетия, учитывая,
// что, к примеру, началом 20 столетия был 1901 год.

const {getRandomIntInterval} = require('../utils');

const year = getRandomIntInterval(1,2222);
let century = (year % 100 !== 0) ? (Math.floor(year / 100) + 1) : Math.floor(year / 100);
console.log("Год = " + year + ", столетие = " + century)

//time 15min