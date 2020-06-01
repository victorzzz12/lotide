//function takes in an array to map
//includes a callback function
const eqArrays = require('./eqArrays');

const assertArraysEqual = require('./assertArraysEqual');

// const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// const results1 = map(words, word => word[0]);
// console.log(results1);
// console.log(assertArraysEqual(map(words, word => word[0]), ([ 'g', 'c', 't', 'm', 't']), true));

// console.log(assertArraysEqual(map(words, word => word[0]), ([ 'f', 'c', 't', 'm', 't']), true));

// console.log(assertArraysEqual(map(words, word => word[0]), ([]), true));