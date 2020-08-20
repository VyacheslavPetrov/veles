"use strict"

//Case16

/*Дано целое число в диапазоне 20–69, определяющее возраст (в годах).
 Вывести строку-описание указанного возраста,
 обеспечив правильное согласование числа со словом «год»,
 например: 20 — «двадцать лет», 32 — «тридцать два года», 41 — «сорок один год».
 */

const {getRandomIntInterval} = require('./utils');

const a = getRandomIntInterval(20, 69);
let x = Math.floor(a / 10);
switch (x) {
    case 2:
        x = "Двадцать";
        break;
    case 3:
        x = "Тридцать";
        break;
    case 4:
        x = "Сорок";
        break;
    case 5:
        x = "Пятьдесят";
        break;
    case 6:
        x = "Шестьдесят";
        break;
}

let z = a % 10;
switch (z) {
    case 1:
        z = "один";
        break;
    case 2:
        z = "два";
        break;
    case 3:
        z = "три";
        break;
    case 4:
        z = "четыре";
        break;
    case 5:
        z = "пять";
        break;
    case 6:
        z = "шесть";
        break;
    case 7:
        z = "семь";
        break;
    case 8:
        z = "восемь";
        break;
    case 9:
        z = "девять";
        break;
    default:
        z = " ";
        break;
}

console.log(a + " - " + x + " " + z)

//time 10min