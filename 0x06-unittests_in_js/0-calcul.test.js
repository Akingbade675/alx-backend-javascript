const assert = require('assert');
const calculateNumber = require("./0-calcul.js");

describe('calculateNumber', () => {
  it('1#should round a and b and return the sum of it', () => {
    assert.equal(calculateNumber(1, 3.7), 5)
  });
  it('2#should round a and b and return the sum of it', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5)
  });
  it('3#should round a and b and return the sum of it', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6)
  });
});
