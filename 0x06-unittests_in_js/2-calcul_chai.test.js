const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  it('1#should round a and b and return the sum of it', () => {
    expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
  });
  it('2#should round a and b and return the subtraction of it', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('3#should round a and b and return the division of it', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('return Error if b equals 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
