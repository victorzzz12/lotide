const eqArrays = require("./eqArrays.js")

const assertArraysEqual = function(array1, array2) {
  return eqArrays(array1, array2);
};

module.exports = assertArraysEqual;