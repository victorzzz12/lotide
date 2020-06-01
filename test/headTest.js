const chai = require('chai'); // 1
const assert = chai.assert;

const head = require('../head');
const assertEqual = require('../assertEqual.js');

describe("#head()", function() {

  it("should return Assertion Passed and true if first element of arr is the same as the expected output", function() {

    const arr = [5,6,7];
    const expected = 5;

    assert.isTrue(assertEqual(head(arr), expected));

  });

  it("should return Assertion Failed and false if first element of arr is not the same as the expected output", function() {

    const arr = [];
    const expected = 5;

    assert.isFalse(assertEqual(head(arr), expected));

  });

});