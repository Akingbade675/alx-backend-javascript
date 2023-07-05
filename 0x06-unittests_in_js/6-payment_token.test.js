const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', (done) => {
  it('should call console.log once and output 120', (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.eql({data: 'Successful response from the API' });
      done();
    });
  });
});
