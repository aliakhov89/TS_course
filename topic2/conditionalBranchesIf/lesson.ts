

//if

let year: number = 2015;

if (year == 2015) console.log( 'Ви маєте рацію!' );

if (year == 2015) {
    console.log( "Це правильно!" );
    console.log( "Ви такий розумний!" );
  }

  if (year == 2015) {
    console.log( 'Ви здогадалися правильно!' );
  } else {
    console.log( 'Як ви можете так помилятися?' ); // будь-яке значення, окрім 2015
  }


  //?

let accessAllowed: boolean;
let yourAge: number = 101 //prompt('Скільки вам років?', '');

if (yourAge > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

console.log(accessAllowed);

//let result = умова ? значення1 : значення2;
accessAllowed = yourAge > 16 ? true : false;

console.log(accessAllowed);


let hiMessage: string = (yourAge < 3) ? 'Привіт, крихітко!' :
  (yourAge < 18) ? 'Вітаю!' :
  (yourAge < 100) ? 'Моє шанування!' :
  'Який незвичайний вік!';

  console.log(hiMessage);


let company: string = 'Netscape'; //'Test Company'; //prompt('Яка компанія створила JavaScript?', '');

(company == 'Netscape') ?
   console.log('Правильно!') : console.log('Неправильно.');


