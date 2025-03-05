function showMessage() {
    console.log('Всім привіт!');
}

showMessage();

function showMessageHiJavaScript() {
    let message = "Привіт, я JavaScript!"; // локальна змінна

    console.log( message );
}

showMessageHiJavaScript(); // Привіт, я JavaScript!



let userName = 'Іван';

function showMessageHiIvan() {
    let message = 'Привіт, ' + userName;
   console.log(message);
}

showMessageHiIvan(); // Привіт, Іван


function showMSGWithParameters(Name: string, Surname: string) {
    console.log('Hi' + ' ' + Name + ' ' + Surname);
}
showMSGWithParameters('Andrii', 'Liakhov')

function showMessageWithAlternativeParam(name:string) {
    if (name === undefined) {
        name = 'name is blank'
    }

    console.log(name);
}

showMessageWithAlternativeParam('Andrii');