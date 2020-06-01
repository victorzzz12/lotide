const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  let index = -1;

  for (const letter of sentence) {

    if (letter !== " ") {

      if (results[letter]) {
        index += 1;
        results[letter].push(index);

      } else {
        index += 1;
        results[letter] = [index];
      }

    } else {
      index += 1;
    }


  }
  return results;
};

module.exports = letterPositions;


// assertArraysEqual(letterPositions("hello").e, [1]);