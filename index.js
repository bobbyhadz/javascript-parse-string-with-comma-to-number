// EXAMPLE 1 - Parse a String with Commas to a Number using `String.replaceAll()`

const str = '12,000,000.50';

const num = parseFloat(str.replaceAll(',', ''));

console.log(num); // 👉️ 123000000.5

// ------------------------------------------------------------------

// // EXAMPLE 2 - Parse a String with Commas to a Number using `String.split()`

// function parseToNumber(str) {
//   return parseFloat(str.split(',').join(''));
// }

// console.log(parseToNumber('12,000,000.50')); // 👉️ 12000000.5
// console.log(parseToNumber('12,123,456')); // 👉️ 12123456

// ------------------------------------------------------------------

// // EXAMPLE 3 - Parse a String with Commas to a Number using `String.replace()`

// const str = '12,000,000.50';

// const num = parseFloat(str.replace(/,/g, ''));

// console.log(num); // 👉️ 123000000.5
