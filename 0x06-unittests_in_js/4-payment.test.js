const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  it('Use Utils.calculateNumber with type SUM, stub it, and log the result once', function () {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');

    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});

