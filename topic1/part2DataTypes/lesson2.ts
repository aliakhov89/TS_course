// тут не буде помилки
let message: string = "привіт";


let n: number = 123;
n = 12.345;

console.log(1 / 0);//get infinity

//String

let str: string = "Привіт";
let str2: string = 'Одинарні лапки також дозволяються';
let phrase: string = `так можна вставляти ${str}`;

console.log(phrase);

//booleqn

let nameFieldChecked: boolean = true; // так, ім’я було перевірене
let ageFieldChecked: boolean = false; // ні, вік не був перевіреним

let isGreater: boolean = 4 > 1;

console.log(isGreater); // true (результат порівняння — "так")

//null
let age :any = null;

//undefined

let age1;

console.log(age1); // покаже "undefined"


//typeof

console.log(typeof "foo") // "string"