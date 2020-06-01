const assertEqual = require('./assertEqual');

const countLetters = function(anyString) {
  let letterCount = {};
  for (const letter of anyString) {

    if (letter !== " ") {

      if (!letterCount[letter]) {
        letterCount[letter] = 1;

      } else {
        letterCount[letter] += 1;
      }
    }
  }
  return letterCount;
};

module.exports = countLetters;

console.log(countLetters('hello'));

assertEqual(countLetters('hello'), { h: 1, e: 1, l: 2, o: 1 }); //failed, will confer with mentor next day