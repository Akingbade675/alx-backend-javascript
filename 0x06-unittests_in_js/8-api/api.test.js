const { expect } = require('chai');
const request = require('request');
const sinon = require('sinon');

describe('test suite for index page', (done) => {
  const port = '7865';
  let reponse, body;

  before((done) => {
    request(`http://localhost:${port}`, (err, res, body) => {
      response = res;
      body = body;
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
    request(`http://localhost:${port}/non-existent-route`, (err, res, body) => {
      expect(res.statusCode).equal(404);
      done();
    });

  });

});
