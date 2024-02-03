const request = require('request');
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

  describe('Cart Page', () => {
    it('should return correct status code when id is a number', (done) => {
      const cartId = 142;
      request(`http://localhost:7865/cart/${cartId}`, (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 142');
	done();
      });
    });

    it('should return 404 status code when id is Not a number', (done) => {
      const notNumber = 'string'
      request(`http://localhost:7865/cart/${notNumber}`, (error, response, body) => {
        expect(response.statusCode).to.equal(404);
	done();
      });
    });
  });
});
