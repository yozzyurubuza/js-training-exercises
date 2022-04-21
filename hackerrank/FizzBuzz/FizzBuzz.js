'use strict';

/*
 * Complete the 'fizzBuzz' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function fizzBuzz(n) {
  // Write your code here
  const createArray = Array.from({ length: n }, (_, i) => {
    if (((i + 1) % 3 !== 0) & ((i + 1) % 5 !== 0)) return console.log(i + 1);

    if (((i + 1) % 3 === 0) & ((i + 1) % 5 === 0))
      return console.log('FizzBuzz');

    if ((i + 1) % 3 === 0) return console.log('Fizz');

    if ((i + 1) % 5 === 0) return console.log('Buzz');
  });
}
export const main = function () {
  const n = 15; // User input

  fizzBuzz(n);
};
