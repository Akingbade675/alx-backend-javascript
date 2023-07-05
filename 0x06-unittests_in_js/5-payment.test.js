const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils.js')

describe('sendPaymentRequestToApi', () => {
  let logSpy;

  beforeEach(() => {
    logSpy = sinon.spy(console, 'log');
  });

  it('should call console.log once and output 120', () => {
    sendPaymentRequestToApi(100, 20);

    expect(console.log.calledOnce).to.be.true;

    expect(console.log.firstCall.args[0]).to.eql('The total is: 120');
  });

  it('should call console.log once and output 20', () => {
    sendPaymentRequestToApi(10, 10);

    expect(console.log.calledOnce).to.be.true;

    expect(console.log.firstCall.args[0]).to.eql('The total is: 20');
  });

  afterEach(() => {
    logSpy.restore();
  })
});
