const request = require('request');
const app = require('./api');
const { expect } = require('chai');

describe('API Tests', () => {
  describe('Index Page', () => {
    it('should return correct status code', (done) => {
      request('http://localhost:7865', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('should return correct result', (done) => {
      request('http://localhost:7865', (error, response, body) => {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });

    it('should have content type set to text/html', (done) => {
      request('http://localhost:7865', (error, response, body) => {
        expect(response.headers['content-type']).to.include('text/html');
        done();
      });
    });
  });
});
