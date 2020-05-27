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

const middle = function(newArray) {
  let middle = [];
  if (newArray.length <= 2) {
    return middle;

  } else if (newArray.length % 2 === 0) {
    middle.push(newArray[(newArray.length / 2 - 1)]);
    middle.push(newArray[(newArray.length / 2)]);
    return middle;

  } else if (newArray.length % 2 !== 0) {
    middle.push(newArray[Math.floor(newArray.length / 2)]);
    return middle;
  }
};

//[1, 2, 3]
//[1, 2, 3, 4, 5];
//]1, 2, 3, 4, 5, 6, 7];

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);