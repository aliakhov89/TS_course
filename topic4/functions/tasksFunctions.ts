//Чи потрібен "else"?
// Наступна функція повертає true, якщо параметр age більший за 18.
// Інакше вона запитує підтвердження через confirm і повертає його результат:

//function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     // ...
//     return confirm('Батьки дозволили?');
//   }
// }

//Чи буде функція працювати по-іншому, якщо забрати else?

//function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm('Батьки дозволили?');
// }

//Чи є різниця в поведінці цих двох варіантів? - Різниці немає


//Перепишіть функцію, використовуючи '?' або '||'
// Наступна функція повертає true, якщо параметр age більший за 18.
// Інакше вона запитує підтвердження через confirm і повертає його результат:

//function checkAge(childAge) {
//   if (childAge > 18) {
//     return true;
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }


function checkAge1(childAge: number) {
    return childAge > 18 || confirm('Батьки дозволили?');
}

function checkAge2(childAge: number) {
    return childAge > 18 ? true : confirm('Батьки дозволили?');
}

//Функція min(a, b)
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
//
// Наприклад:
//
// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1

function minOfTwoNumbers(a: number, b: number) {
  if (a > b) {
      return b;
  }
  else {
      return a;
  }
}
//перепиши функцію на більш читабельний варіант, оскільки перевірка маленька а строчок кода багато
function minOfTwoNumbersShortVersion(a: number, b: number): number {
    return a > b ? b : a;
}

//Функція pow(x, n)
// Напишіть функцію pow(x, n), яка повертає число x, піднесене до степеня n. Інакше кажучи, множить число x саме на себе n разів і повертає результат.
//
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
//P.S. В цій задачі функція повинна підтримувати лише натуральні значення n, тобто цілі числа, починаючи з 1.

function pow(x: number, n: number) {
    if (n <  1) {
        throw new Error("Перше число має бути більше 0");
    }

    let result: number = 1; // Початкове значення результату
    for (let i: number = 0; i < n; i++) {
        result *= x; // Множимо result на x n разів
    }
    console.log(result);
    return result; // Повертаємо результат
}

pow(2, 0)

