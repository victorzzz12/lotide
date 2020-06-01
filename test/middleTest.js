const chai = require('chai'); // 1
const assert = chai.assert;

const middle = require("../middle.js");
const assertArraysEqual = require("../assertArraysEqual.js");

describe("#middle()", function() {

  it("should return true if [1,2,3] equals [2]", function() {

    const actual = [1, 2, 3];
    const expected = [2];

    assert.isTrue(assertArraysEqual(middle(actual), expected));

  });

  it("should return true if [1,2,3,4] equals [2,3]", function() {

    const actual = [1, 2, 3, 4];
    const expected = [2, 3];

    assert.isTrue(assertArraysEqual(middle(actual), expected));

  });


  it("should return false if [1, 2, 3] does not equals []", function() {

    const actual = [1, 2, 3];
    const expected = [1];

    assert.isFalse(assertArraysEqual(middle(actual), expected));

  });

  it("should return an empty array if length of array is 2 or less", function() {

    const actual = [1];
    const expected = [];

    assert.isTrue(assertArraysEqual(middle(actual), expected));

  });

});