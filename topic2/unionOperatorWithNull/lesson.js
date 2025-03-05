"use strict";
//??
var _a, _b;
let user;
console.log(user !== null && user !== void 0 ? user : "Анонімний"); // Анонімний (user є undefined)
let firstName2 = null;
let lastName1 = null;
let nickName1 = "Суперкодер";
// показує перше визначене значення:
console.log((_b = (_a = firstName2 !== null && firstName2 !== void 0 ? firstName2 : lastName1) !== null && _a !== void 0 ? _a : nickName1) !== null && _b !== void 0 ? _b : "Анонімний"); // Суперкодер
//Порівняння з ||
console.log(firstName2 || lastName1 || nickName1 || "Анонімний"); // Суперкодер
let height = 0;
console.log(height || 100); // 100
console.log(height !== null && height !== void 0 ? height : 100); // 0
//завдань після цього уроку не було))
