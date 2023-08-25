const sinon = require('sinon')


const sendPaymentRequestToApi = require('./3-payment'); // Adjust the path as needed

describe('sendPaymentRequestToApi Suite', () => {
  it('should use Utils.calculateNumber for payment calculation', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    sinon.assert.calledOnce(calculateNumberSpy);
    sinon.assert.calledWithExactly(calculateNumberSpy, 'SUM', 100, 20);

    calculateNumberSpy.restore();
  });
});
