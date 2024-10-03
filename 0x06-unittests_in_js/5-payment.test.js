const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  let spy;


  beforeEach(function() {
    spy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    spy.restore();
  });

  it('should call sendPaymentRequestToApi with 100 and 20, and log the correct message', function() {
    sendPaymentRequestToApi(100, 20);

    expect(spy.calledOnceWithExactly('The total is: 120')).to.be.true;

    expect(spy.calledOnce).to.be.true;
  });

  it('should call sendPaymentRequestToApi with 10 and 10, and log the correct message', function() {
    sendPaymentRequestToApi(10, 10);

    expect(spy.calledOnceWithExactly('The total is: 20')).to.be.true;


    expect(spy.calledOnce).to.be.true;
  });
});
