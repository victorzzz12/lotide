const chai = require('chai'); // 1
const assert = chai.assert;

const tail = require('../tail');
const assertEqual = require('../assertEqual.js');

describe("#tail()", function() {

  it("should return Assertion Passed and [2, 3] for [1, 2, 3]", function() {

    const arr = [1, 2, 3];
    const expected = [2, 3];

    assert.isTrue(assertEqual(tail(arr), expected)); //does not work because object !== object

  });

  it("should return Assertion Failed and [Labs] for [Hello, Lighthouse, Labs]", function() {

    assert.isFalse(assertEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Labs'])); //will always return false because object !== object

  });


  it("should return Assertion Passed and true if length of the new array is the same as the expected array", function() {

    const arr = [1, 2, 3];
    const expected = [2, 3];

    assert.isTrue(assertEqual(tail(arr).length, expected.length));
  });

});