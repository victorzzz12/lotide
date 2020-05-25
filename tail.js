const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }   
};

const tail = function(words) {
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    newArray.push(words[i]);
  }
  newArray.splice(0,1);
  return newArray;
}

const words = ["Yo Yo", "Lighthouse", "Labs"];

tail(words);

assertEqual(words.length, 3);