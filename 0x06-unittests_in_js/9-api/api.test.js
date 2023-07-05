const { expect } = require('chai');
const request = require('request');
const sinon = require('sinon');

describe('test suite for index page', (done) => {
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

describe('/GET cart/:id', () => {
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
