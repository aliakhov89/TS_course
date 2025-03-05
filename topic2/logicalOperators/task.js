"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
//Що виведе код нижче?
//alert( null || 2 || undefined ); answer 2
//Що виведе код нижче?
//alert( alert(1) || 2 || alert(3) ); answer 1 and 2
//alert( 1 && null && 2 );  answer null
//alert( alert(1) && alert(2) );  answer 1 then error
//alert( null || 2 && 3 || 4 ); answer 3
//Напишіть умову if, щоб перевірити, чи age знаходиться між 14 та 90 включно.
//“Включно” означає, що age може досягати країв 14 або 90.
//Напишіть умову if, щоб перевірити, чи значення age НЕ знаходиться між 14 та 90 включно.
//Створіть два варіанти: перший з оператором НЕ !, другий — без нього.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('How old are you?', (yourAge) => {
    const parsedAge = parseInt(yourAge);
    if (parsedAge >= 14 && parsedAge <= 90) {
        console.log("Age is between 14 and 90, inclusive.");
    }
    else {
        console.log("Age is outside the range of 14 to 90.");
    }
    ;
    // Close the interface
    rl.close();
});
//Які з цих alert буде виконано?
//Якими будуть результати виразів у if(...)?
//if (-1 || 0) alert( 'перший' ); буде виконано, true
//if (-1 && 0) alert( 'другий' ); не буде виконано, false
//if (null || -1 && 1) alert( 'третій' ); буде виконано
//Перевірте логін
//важливість: 3
//Напишіть код, який запитує логін за допомогою prompt.
//Якщо відвідувач вводить "Admin", тоді запропонуйте за допомогою prompt ввести пароль. Якщо введено порожній рядок або натиснуто Esc – показати “Скасовано”. Якщо введено інший рядок – тоді покажіть “Я вас не знаю”.
//Пароль перевіряється наступним чином:
//Якщо він дорівнює “Господар”, тоді покажіть “Ласкаво просимо!”,
//Інший рядок – покажіть “Неправильний пароль”,
//Для порожнього рядка, або якщо введення було скасовано, покажіть “Скасовано”.
//Будь ласка, використовуйте вкладені if блоки. Потурбуйтесь про загальну читабельність коду.
//Підказка: передача порожнього вводу до запиту повертає порожній рядок ''. Натискання ESC протягом запиту повертає null.
rl.question("Who's there? ", (typedUserName) => {
    if (typedUserName === "Admin") {
        rl.question("Password? ", (typedPassword) => {
            if (typedPassword === "TheMaster") {
                console.log("Welcome!");
                rl.close(); // Закриваємо інтерфейс після успішного входу
            }
            else if (typedPassword === "Other") {
                console.log("Wrong password");
                rl.close(); // Закриваємо інтерфейс після помилки
            }
            else if (typedPassword === "Cancel") {
                console.log("Canceled");
                rl.close(); // Закриваємо інтерфейс після скасування
            }
            else {
                console.log("Incorrect password");
                rl.close(); // Закриваємо інтерфейс після невірного пароля
            }
        });
    }
    else if (typedUserName === "Other") {
        console.log("I don't know you");
        rl.close(); // Закриваємо інтерфейс після невірного імені
    }
    else if (typedUserName === "Cancel") {
        console.log("Canceled");
        rl.close(); // Закриваємо інтерфейс після скасування
    }
    else {
        console.log("I don't know you");
        rl.close(); // Закриваємо інтерфейс після невірного імені
    }
});
