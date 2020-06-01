const chai = require('chai'); // 1
const assert = chai.assert;

const head = require('../head');

describe("#head()", function() {

  it("should return true if head(arr) === expected ", function() {

    const arr = [5,6,7];
    const expected = 5;

    assert.deepEqual(head(arr), expected);

  });

  it("should return undefined if array is empty", function() {

    const arr = [];
    const expected = undefined;

    assert.isTrue(head(arr) === expected);

  });

});