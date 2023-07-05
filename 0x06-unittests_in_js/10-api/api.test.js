const { expect } = require('chai');
const request = require('request');
const sinon = require('sinon');

describe('GET /', (done) => {
  const port = '7865';
  let reponse;

  before((done) => {
    request(`http://localhost:${port}`, (err, res) => {
      response = res;
      done();
    })
  });

  it('/GET should get the correct result', () => {
    expect(response.body).equal('Welcome to the payment system');
  });

  it('/GET should get correct status code', () => {
    expect(response.statusCode).equal(200);
  });

  it('should return a 404 status code for a non-existent route', (done) => {
    request(`http://localhost:${port}/non-existent-route`, (err, res) => {
      expect(res.statusCode).equal(404);
      done();
    });
  });
});


describe('GET cart/:id', () => {
  const port = '7865';
  let reponse, body;

  it('should return status code 200 when :id is a number', (done) => {
    request(`http://localhost:${port}/cart/10`, (err, res) => {
      expect(res.statusCode).equal(200);
      expect(res.body).equal('Payment methods for cart 10');
      done();
    });
  });
  
  it('should return status code 404 when :id is NOT a number', (done) => {
    request(`http://localhost:${port}/cart/name`, (err, res) => {
      expect(res.statusCode).equal(404);
      expect(res.body).equal('Error: id must be a number');
      done();
    });
  });
});


// Test for the /available_payments endpoint
describe('GET /available_payments', function () {
  it('should return available payment methods', (done) => {
    request.get('http://localhost:7865/available_payments', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      const paymentMethods = JSON.parse(body).payment_methods;
      expect(paymentMethods).to.deep.equal({
        credit_cards: true,
        paypal: false
      });
      done();
    });
  });
});

  
// Test for the /login endpoint
describe.only('POST /login', function () {
  it('should return a welcome message with the username', (done) => {
    const username = 'JohnDoe';
    const requestData = {
      url: 'http://localhost:7865/login',
      method: 'POST',
      json: {
        userName: username
      }
    };

    request(requestData, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal(`Welcome ${username}`);
      done();
    });
  });
});
