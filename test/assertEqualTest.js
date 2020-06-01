const chai = require('chai'); // 1
const assert = chai.assert;

const assertEqual = require('../assertEqual.js');

describe("#assertEqual()", function() {

  it("should return true if actual equals expected", function() {

    const actual = "0";
    const expected = "0";

    assert.isTrue(assertEqual(actual, expected));

  });

  it("should return false if actual does not equal expected", function() {

    const actual = "haha";
    const expected = "ha";

    assert.isFalse(assertEqual(actual, expected));

  });


});