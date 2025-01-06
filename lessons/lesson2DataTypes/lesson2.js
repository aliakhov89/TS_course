"use strict";
// тут не буде помилки
let message = "привіт";
let n = 123;
n = 12.345;
console.log(1 / 0); //get infinity
//String
let str = "Привіт";
let str2 = 'Одинарні лапки також дозволяються';
let phrase = `так можна вставляти ${str}`;
console.log(phrase);
//booleqn
let nameFieldChecked = true; // так, ім’я було перевірене
let ageFieldChecked = false; // ні, вік не був перевіреним
let isGreater = 4 > 1;
console.log(isGreater); // true (результат порівняння — "так")
//null
let age = null;
//undefined
let age1;
console.log(age1); // покаже "undefined"
//typeof
typeof undefined; // "undefined"
typeof 0; // "number"
//typeof 10n // "bigint"
typeof true; // "boolean"
console.log(typeof "foo"); // "string"
typeof Symbol("id"); // "symbol"
typeof Math; // "object"  (1)
typeof null; // "object"  (2)
typeof alert; // "function"  (3)
