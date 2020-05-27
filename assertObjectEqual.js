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


const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (typeof object1[key] !== typeof object2[key]) {
      return false;
      
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);

    } else {

      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertObjectsEqual(eqObjects({name: 1}, {name: 1}), true);
assertObjectsEqual(eqObjects({name: 1}, {}), false);
