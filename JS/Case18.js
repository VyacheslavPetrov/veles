"use strict"

//Case18

//Дано целое число в диапазоне 100–999.
// Вывести строку-описание данного числа, например: 256 — «двести пятьдесят шесть», 814 — «восемьсот четырнадцать».

const {getRandomIntInterval} = require('./utils');

const a = getRandomIntInterval(100, 999);

let x = Math.floor(a / 100);

switch (x) {
    case 1:
        x = "Сто";
        break;
    case 2:
        x = "Двести";
        break;
    case 3:
        x = "Триста";
        break;
    case 4:
        x = "Четыреста";
        break;
    case 5:
        x = "Пятьсот";
        break;
    case 6:
        x = "Шестьсот";
        break;
    case 7:
        x = "Семьсот";
        break;
    case 8:
        x = "Восемьсот";
        break;
    case 9:
        x = "Девятьсот";
        break;
}

let y = a % 100;
let z = a % 10;
if(y <= 19 && y > 9) {
    z = " ";
    switch (y) {
        case 10:
            y = "десять";
            break;
        case 11:
            y = "одиннадцать";
            break;
        case 12:
            y = "двенадцать";
            break;
        case 13:
            y = "тринадцать";
            break;
        case 14:
            y = "четырнадцать";
            break;
        case 15:
            y = "пятнадцать";
            break;
        case 16:
            y = "шестнадцать";
            break;
        case 17:
            y = "семнадцать";
            break;
        case 18:
            y = "восемнадцать";
            break;
        case 19:
            y = "девятнадцать";
            break;

    }
} else  if (y >19) {
    switch (y = Math.floor(y / 10)) {
        case 2:
            y = "двадцать";
            break;
        case 3:
            y = "тридцать";
            break;
        case 4:
            y = "сорок";
            break;
        case 5:
            y = "пятьдесят";
            break;
        case 6:
            y = "шестьдесят";
            break;
        case 7:
            y = "семьдесят";
            break;
        case 8:
            y = "восемьдесят";
            break;
        case 9:
            y = "девяносто";
            break;
    }
    switch (z) {
        case 0:
            z = " ";
            break;
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
    }
} else {
    z = " ";
    switch (y) {
        case 0:
            y = " ";
            break;
        case 1:
            y = "один";
            break;
        case 2:
            y = "два";
            break;
        case 3:
            y = "три";
            break;
        case 4:
            y = "четыре";
            break;
        case 5:
            y = "пять";
            break;
        case 6:
            y = "шесть";
            break;
        case 7:
            y = "семь";
            break;
        case 8:
            y = "восемь";
            break;
        case 9:
            y = "девять";
            break;

    }
}
console.log(a + " - " + x + " " + y + " " + z);

//time 50min