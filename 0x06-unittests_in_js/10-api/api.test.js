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

  it('GET / returns “Welcome to the payment system”', () => {
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


describe('GET /cart/:id', () => {
  const port = '7865';

  it('GET /cart/:id returns "Payment methods for cart :id"', (done) => {
    const id = 10;
    request(`http://localhost:${port}/cart/${id}`, (err, res) => {
      expect(res.statusCode).equal(200);
      expect(res.body).equal(`Payment methods for cart ${id}`);
      done();
    });
  });
  
  it('GET /cart/:id can’t accept :id not a number', (done) => {
    const id = 'number';
    request(`http://localhost:${port}/cart/${id}`, (err, res) => {
      expect(res.statusCode).equal(404);
      expect(res.body).equal('Error: id must be a number');
      done();
    });
  });
});


// Test for the /available_payments endpoint
describe('GET /available_payments', function () {
  it('GET /available_payments exists', (done) => {
    request.get('http://localhost:7865/available_payments', (err, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('GET /available_payments returns the right object', (done) => {
    request.get('http://localhost:7865/available_payments', (err, response, body) => {
      expect(JSON.parse(body)).to.eql({
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      });
      done();
    });
  });
});

  
// Test for the /login endpoint
describe('POST /login', function () {
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
