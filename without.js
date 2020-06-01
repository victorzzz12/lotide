const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let newArray = source;
  finalArray = [];
  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === newArray[i]) {
        newArray.splice(i, 1);
        j = 0;
      }
    }
  }
  console.log(newArray);
  let finalArray = newArray;
  return finalArray;

};

module.exports = without;

// without([1, 2, 3], [1]);
// without(["1", "2", "3"], [1, 2, "3"]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function

// assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
// assertArraysEqual(without([1, 2, 3], [1]), ["2",3]);
// assertArraysEqual(without([2, 3], [3]), [2]);
// assertArraysEqual(without([1, 2, 1], [1]), [2]);
// assertArraysEqual(without([], []), []);