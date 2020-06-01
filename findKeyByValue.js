const assertEqual = require('./assertEqual');

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(object, showName) {
  let keyArray = Object.keys(object);
  for (let i = 0; i < keyArray.length; i++) {
    if (object[keyArray[i]] === showName) {
      return keyArray[i];
    }
  }
};

module.exports = findKeyByValue;

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);