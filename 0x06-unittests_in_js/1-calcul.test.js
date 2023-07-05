const assert = require('assert');
const calculateNumber = require("./1-calcul.js");

describe('calculateNumber', () => {
  it('1#should round a and b and return the sum of it', () => {
    assert.equal(calculateNumber('SUM', 1, 3.7), 5);
  });
  it('2#should round a and b and return the subtraction of it', () => {
    assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
  });
  it('3#should round a and b and return the division of it', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
  });
  it('return Error if b equals 0', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
  });
});
