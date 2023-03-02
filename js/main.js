function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2
  
  console.log(getRandomInt(1));
  // Expected output: 0
  
  console.log(Math.random());
  // Expected output: a number from 0 to <1
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

var x = 'Mozilla';
var empty = '';

console.log('Слово «Mozilla» занимает ' + x.length + ' кодовых значений');
/* "Слово «Mozilla» занимает 7 кодовых значений" */

console.log('Пустая строка имеет длину, равную ' + empty.length);
/* "Пустая строка имеет длину, равную 0" */
//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/length
