//function takes in an array to map
//includes a callback function
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
  return eqArrays(array1, array2);
};

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {

  const results = [];
  
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);
console.log(assertArraysEqual(map(words, word => word[0]), ([ 'g', 'c', 't', 'm', 't']), true));

console.log(assertArraysEqual(map(words, word => word[0]), ([ 'f', 'c', 't', 'm', 't']), true));

console.log(assertArraysEqual(map(words, word => word[0]), ([]), true));