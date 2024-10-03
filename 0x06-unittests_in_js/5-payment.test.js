const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;

  // Before each test, spy on console.log
  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  // After each test, restore the original console.log
  afterEach(function() {
    spy.restore();
  });

  it('should call sendPaymentRequestToApi with 100 and 20, and log the correct message', function() {
    sendPaymentRequestToApi(100, 20);

    // Verify console.log was called with the correct message
    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;

    // Verify console.log was called once
    expect(spy.calledOnce).to.be.true;
  });

  it('should call sendPaymentRequestToApi with 10 and 10, and log the correct message', function() {
    sendPaymentRequestToApi(10, 10);

    // Verify console.log was called with the correct message
    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;

    // Verify console.log was called once
    expect(spy.calledOnce).to.be.true;
  });
});
