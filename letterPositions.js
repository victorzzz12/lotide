const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;

  } else if (array1 === array2) {
    return true;

  } else if (array1 === null || array2 === null) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  console.log(eqArrays(array1, array2));
};

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


assertArraysEqual(letterPositions("hello").e, [1]);