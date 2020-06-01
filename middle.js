const assertArraysEqual = require("./assertArraysEqual");

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

module.exports = middle;

//[1, 2, 3]
//[1, 2, 3, 4, 5];
//]1, 2, 3, 4, 5, 6, 7];

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);