const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;

  } else if (array1 === array2) {
    return true;

  } else if (array1 === null || array2 === null) {
    return false;

  } else if (array1.length === 0 && array2.length === 0) {
    return true;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  console.log(eqArrays(array1, array2));
};

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

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function

assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [1]), ["2",3]);
assertArraysEqual(without([2, 3], [3]), [2]);
assertArraysEqual(without([1, 2, 1], [1]), [2]);
assertArraysEqual(without([], []), []);