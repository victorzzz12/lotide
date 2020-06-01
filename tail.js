const assertEqual = require("./assertEqual.js");

const tail = function(words) {
  let newArray = [];
  for (let i = 0; i < words.length; i++) {
    newArray.push(words[i]);
  }
  return newArray.slice(1, words.length);
};

module.exports = tail;