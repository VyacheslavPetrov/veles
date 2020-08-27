"use strict"

//minmax2
//Дано целое число N и набор из N прямоугольников,
// заданных своими сторонами — объектами c парами рандомных чисел {a, b}.
// Найти минимальную и максимальную площадь прямоугольников из данного набора.
// Пример массива на JS: "[{a: 4, b: 5},{a: 1, b: 7},{a: 1, b: 6},{a: 2, b: 2},{a: 1, b: 9}]"

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

const N = getRandomIntInterval(1, 10);
let arr = [];
console.log("N = " + N);

for(let i = 0; i < N; i++){
    arr.push({a: getRandomIntInterval(1, 10), b: getRandomIntInterval(1, 10)});
}
console.log(arr);

let minS = (arr[0].a * arr[0].b),
    maxS = (arr[0].a * arr[0].b);
for(let i = 0; i < arr.length; i++){
    if((arr[i].a * arr[i].b) < minS){
        minS = arr[i].a * arr[i].b;
    }
    if(maxS < (arr[i].a * arr[i].b)){
        maxS = arr[i].a * arr[i].b;
    }
}
console.log("Минимальная площадь = " + minS);
console.log("Максимальная площадь = " + maxS);

//time 15min