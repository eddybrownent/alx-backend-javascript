const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function () {
  let consoleLogSpy;

  beforeEach("Sets up s spy to use for each test", function () {
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach("Restores the spy after usage", function () {
    consoleLogSpy.restore();
  });

  it('Correct log message and be called once with totalAmount 100 and totalShipping 20', function () {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
  });

  it('Correct log message and be called once with totalAmount 10 and totalShipping 10', function () {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
  });
});

