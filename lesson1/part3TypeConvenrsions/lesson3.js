"use strict";
let value = true;
console.log(typeof value);
let test = String(value); // тепер value - це рядок "true"
console.log(typeof test);
let newStr = "123";
console.log(typeof newStr); // string
let num = Number(newStr); // стає числом 123
console.log(typeof num); // number
let ageNew = Number("довільний рядок замість числа");
console.log(ageNew); // NaN, помилка перетворення
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("вітаю")); // true
console.log(Boolean("")); // false
