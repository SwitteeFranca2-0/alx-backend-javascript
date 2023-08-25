const sinon = require('sinon')
const sendPaymentRequestToApi = require('./4-payment'); 


describe('sendPaymentRequestToApi Suite', () => {
    let consoleLogSpy;

    beforeEach(()=>{
        consoleLogSpy = sinon.spy(console, 'log');
    });
    afterEach(()=>{
        consoleLogSpy.restore()
    });

  it('should use Utils.calculateNumber for payment calculation', () => {
    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 120');
  });

  it('should use Utils.calculateNumber for payment calculation', () => {
    sendPaymentRequestToApi(10, 10);

    sinon.assert.calledOnce(consoleLogSpy);
    sinon.assert.calledWithExactly(consoleLogSpy, 'The total is: 20');
  });
});
