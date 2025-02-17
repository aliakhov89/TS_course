let x: number = 1;

x = -x;
console.log( x ); // -1, було застосоване унарне заперечення

console.log( 5 % 2 ); // 1 - остача від ділення 5 на 2
console.log( 8 % 3 ); // 2 - остача від ділення 8 на 3
console.log( 8 % 4 ); // 0 - остача від ділення 8 на 4


console.log( 2 ** 2 ); // 2² = 4
console.log( 2 ** 3 ); // 2³ = 8
console.log( 2 ** 4 ); // 2⁴ = 16


let s: string = 'мій_' + 'рядок';
console.log(s); // мій_рядок
console.log(2 + 2 + '1' ); // "41", а не "221"

let apples: string = "2";
let oranges: string = "3";

console.log( apples + oranges ); // "23", бінарний плюс об’єднує рядки

let d: number = 2 * 2 + 1;
console.log(d); // 5


let a: number = 1;
let b: number = 2;
let c: number = 3 - (a = b + 1);
console.log( a ); // 3
console.log( c ); // 0


let e: number;
let f: number;
let g: number;
e = f = g = 2 + 2;
console.log( a ); // 4
console.log( b ); // 4
console.log( c ); // 4

let h: number = 2;
h += 5; // тепер h = 7 (те ж саме, що h = h + 5)
h *= 2; // тепер h = 14 (те ж саме, що h = h * 2)
console.log( h ); // 14


let counter: number = 2;
counter++;// працює так само, як counter = counter + 1, але запис коротше
counter++;  
counter--;      
console.log( counter ); // 3

