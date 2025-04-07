let sum = (a: number, b: number) => a + b;

/* Ця стрілкова функція — це коротша форма для:

let sum = function(a, b) {
  return a + b;
};
*/

console.log(sum(1, 2));

let multipleForTwo = (x: number) => x * 2;
// те ж саме, що і: let double = function(n) { return n * 2 }

console.log( multipleForTwo(3) ); // 6