//??

let user;

console.log(user ?? "Анонімний"); // Анонімний (user є undefined)



let firstName2 = null;
let lastName1 = null;
let nickName1 = "Суперкодер";

// показує перше визначене значення:
console.log(firstName2 ?? lastName1 ?? nickName1 ?? "Анонімний"); // Суперкодер


//Порівняння з ||

console.log(firstName2 || lastName1 || nickName1 || "Анонімний"); // Суперкодер


let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0


//завдань після цього уроку не було))