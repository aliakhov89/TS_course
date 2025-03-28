let aValue: number = 2 + 2;

switch (aValue) {
    case 3:
        console.log( 'Замало' );
        break;
    case 4:
        console.log( 'Точнісінько!' );
        break;
    case 5:
        console.log( 'Забагато' );
        break;
    default:
        console.log( 'Я не знаю таких значень' );
}

//without break

switch (aValue) {
    case 3:
        console.log( 'Замало' );
    case 4:
        console.log( 'Точнісінько!' );
    case 5:
        console.log( 'Забагато' );
    default:
        console.log( 'Я не знаю таких значень' );
}

let aDigit:string = "1";
let bDigit = 0;

switch (+aDigit) {
    case bDigit + 1:
        console.log("виконано це, бо +a це 1, що строго дорівнює b + 1");
        break;

    default:
        console.log("це не буде виконано");
}

//Групування “case”
let aWrong = 3;

switch (aWrong) {
    case 4:
        console.log('Вірно!');
        break;

    case 3: // (*) групуємо два блоки `case`
    case 5:
        console.log('Невірно!');
        console.log("Можливо вам варто відвідати урок математики?");
        break;

    default:
        console.log('Результат виглядає дивно. Дійсно.');
}
