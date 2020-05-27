const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
  console.log(letterCount);
  return letterCount;
};

countLetters("lighthouse in the house");
assertEqual(countLetters('hello'), { h: 1, e: 1, l: 2, o: 1 });