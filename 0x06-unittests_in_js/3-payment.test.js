const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  it('Use Utils.calculateNumber with type SUM and log the result once', function () {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(calculateNumberSpy);
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');

    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});
