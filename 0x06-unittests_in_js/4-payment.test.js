const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment.js');
const Utils = require('./utils.js')

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber()', () => {
    const calcNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calcNumStub.calledOnce).to.be.true;
    expect(calcNumStub.firstCall.args).to.eql(['SUM', 100, 20]);

    expect(console.log.firstCall.args[0]).to.eql('The total is: 10');
  });
});
