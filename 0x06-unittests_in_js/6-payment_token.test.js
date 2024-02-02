const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('Returns a successful response from the API when success is true', function (done) {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        assert.deepStrictEqual(result, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
