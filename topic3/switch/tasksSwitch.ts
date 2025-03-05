//Перепишіть конструкцію "switch" в аналогічну з використанням "if"
// Напишіть код з використанням if..else, що відповідає наступній конструкції switch:

//switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Ми підтримуємо і ці браузери' );
//     break;
//
//   default:
//     alert( 'Маємо надію, що ця сторінка виглядає добре!' );
// }

let browser: string = "Chrome";

if (browser == "Edge") {
    console.log("You've got the Edge!");
} else if (browser == "Safari" || browser == "Firefox" || browser == "Opera" || browser == "Chrome") {
    console.log("Ми підтримуємо і ці браузери");
} else {
    console.log("Маємо надію, що ця сторінка виглядає добре!")
}

//Перепишіть умови "if" в конструкцію "switch"
// Перепишіть код нижче використовуючи одну конструкцію switch:

//let a = +prompt('a?', '');
//
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
//
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }

let bNumber: number = 0; // замінив +prompt('a?', ''); бо з ним помилка - просто впиши сюда бажане значення

switch (bNumber) {
    case 0:
        console.log('0')
        break;
    case 1:
        console.log('1')
        break;
    case 2:
    case 3:
        console.log('2,3')
        break;
}