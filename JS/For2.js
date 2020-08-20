"use strict"

//For2
/*Даны два целых числа A и B (A < B).
Вывести в порядке возрастания все целые числа, расположенные между A и B (включая сами числа A и B)
, а также количество N этих чисел.
 */

const {getRandomIntInterval} = require('./utils')

const a = getRandomIntInterval(1,10)
const b = getRandomIntInterval(11,20)

console.log(`a = ${a}, b = ${b}`)

for (let i = a; i <= b; i++ ) {
    console.log(i)
}

console.log(`Количество чисел: ${b - a + 1}`)

//time 10min


// TODO - KISS, YAGNI