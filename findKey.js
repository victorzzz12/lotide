const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {

  for (const key in object) {

    if (callback(object[key]) === true) {

      let name = key;
      return name;

    }
  }
  return undefined;
  
  //scan the object
  //then return the first key if the callback is true

};

module.exports = findKey;

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2));


// returns "noma"