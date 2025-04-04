//Які кінцеві значення всіх змінних k, y, j та l після виконання коду нижче?

let k: number = 1, y = 1;

let j: number = ++k; // answerj = 2, k = 2
let l: number = y++; // answer l = 1, y = 2

console.log(j);
console.log(l);
console.log(k);
console.log(y);


//Які значення мають a2 та x2 після виконання коду нижче?

let a2: number = 2;

let x2: number = 1 + (a2 *= 2); //answer  a2 = 4, x2= 5

console.log(a2);
console.log(x2);

//Які результати цих виразів?

//"" + 1 + 0 answer 10
//"" - 1 + 0 answer -1
//true + false answer 1 
//6 / "3" answer 6
//"2" * "3" answer 6
//4 + 5 + "px" answer "9px"
//"$" + 4 + 5 answer "$45"
//"4" - 2 answer 2
//"4px" - 2 answer ERROR
//"  -9  " + 5 answer "  -9  5"
//"  -9  " - 5 answer -14
//null + 1 answer 1
//undefined + 1 answer ERROR
//" \t \n" - 2 answer -2


//Нижче наведено код, що просить користувача ввести два числа і відображає їхню суму.

//Він працює неправильно. Код у прикладі виводить 12 (для початкових значень у полях вводу).

//У чому помилка? Виправте її. Результат має бути 3.

//let a = prompt("Перше число?", 1);
//let b = prompt("Друге число?", 2);

//alert(a + b); // 12

//Ми отримуємо 12, тому що виконується конкатенація

//Виправлений код
//+ перед prompt перетворює введені значення на числа, і далі операція додавання працює як треба
//let a = +prompt("Перше число?", 1));
//let b = +prompt("Друге число?", 2));

//console.log(a + b); // 3