const sinon = require('sinon')
const assert = require('assert')
const sendPaymentRequestToApi = require('./4-payment'); 


describe('sendPaymentRequestToApi Suite', () => {
  it('should use Utils.calculateNumber for payment calculation', () => {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber')
    calculateNumberStub.returns(10)
    const consoleLogSpy = sinon.spy(console, 'log')
    
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(calculateNumberStub);
    sinon.assert.calledWithExactly(calculateNumberStub, 'SUM', 100, 20);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 10');

    
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
