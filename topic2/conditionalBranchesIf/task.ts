import * as readline from 'readline';

//Чи буде показано alert?

//if ("0") {
//    alert( 'Привіт' );
//  }

//так як 0 завжди стає true - я замінив 0 на true бо іначе не компілилося

if (true) { //так
    console.log( 'Привіт' );
  }


//Використовуючи конструкцію if..else, напишіть код, що запитує: ‘Яка “офіційна” назва JavaScript?’

//Якщо відвідувач вводить “ECMAScript”, виведіть “Правильно!”, в іншому випадку — виведіть: “Ви не знаєте? ECMAScript!”

// Create an interface for input and output through the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });



rl.question('Яка “офіційна” назва JavaScript?', (officialJavaScriptName: string) => {
    if (officialJavaScriptName == 'ECMAScript') {
        console.log('Правильно!');
    } else {
        console.log('Не знаєте? “ECMAScript”!');
    };
    // Close the interface
  rl.close();
});






