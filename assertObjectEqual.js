const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertObjectsEqual;

assertObjectsEqual(eqObjects({name: 1}, {name: 1}), true);
assertObjectsEqual(eqObjects({name: 1}, {}), false);
