"use strict"

//minmax1
//Дано целое число N. Сгенерируйте массив из N случайных целых чисел.
//Найти минимальный и максимальный из элементов данного массива и вывести их в указанном порядке.

const {getRandomIntInterval} = require('../utils') // Импортируем функции из файла utils.js

const N = getRandomIntInterval(1, 10);
let arr = [];
console.log("N = " + N);
for(let i = 0; i < N; i++){
    arr.push(getRandomIntInterval(1, 100));
}
console.log(arr);
let minArr = arr[0],
    maxArr = arr[0];
for(let i = 1; i < arr.length; i++){
    if(minArr >= arr[i]){
        minArr = arr[i];
    }
    if(maxArr <= arr[i]){
        maxArr = arr[i];
    }
}
console.log("Min array's element = " + minArr + ". And max array's element = " + maxArr);

//time 20min