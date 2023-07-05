const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js')

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber()', () => {
    sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(Utils.calculateNumber.calledOnce).to.be.true;
    expect(Utils.calculateNumber.firstCall.args).to.deep.equal(['SUM', 100, 20]);
  });
});
