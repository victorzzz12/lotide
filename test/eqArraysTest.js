const chai = require('chai'); // 1
const assert = chai.assert;

const eqArrays = require('../eqArrays.js');

describe("#eqArrays()", function() {

  it("should return true if actual equals expected", function() {

    const actual = [1, 2, 3];
    const expected = [1, 2, 3];

    assert.isTrue(eqArrays(actual, expected));

  });

  it("should return false if actual array length is not expected array length", function() {

    const actual = [1, 2, 3];
    const expected = [1, 3];

    assert.isFalse(eqArrays(actual, expected));

  });

  it("should return false if any values of actual do not equal values of expected", function() {

    const actual = [1, 2, 3];
    const expected = [1, 2, '3'];

    assert.isFalse(eqArrays(actual, expected));

  });


});

