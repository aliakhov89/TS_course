//|| (АБО)

console.log( true || true );   // true
console.log( false || true );  // true
console.log( true || false );  // true
console.log( false || false ); // false


if (1 || 0) { // працює так само, як ( true || false )
    console.log( 'правдиво!' );
  }


  let hour: number = 11;

  if (hour < 10 || hour > 18) {
    console.log( 'Офіс зачинений.' );
  }
  else {
    console.log('Офіс відчинено');
  }


let firstName1: string = "";
let lastName: string = "";
let nickName: string = "СуперКодер";

console.log( firstName1 || lastName || nickName || "Анонім"); // СуперКодер


//&& (І)

console.log( true && true );   // true
console.log( false && true );  // false
console.log( true && false );  // false
console.log( false && false ); // false

let hours: number = 12;
let minute: number = 30;

if (hours == 12 && minute == 30) {
    console.log( 'Час: 12:30' );
}


//! (НЕ)

console.log( !true ); // false
console.log( !0 ); // true