const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with a token when successful', (done) => {
        getPaymentTokenFromAPI(true)
            .then(token => {
                expect(token).to.deep.equal({data: 'Successful response from API'});
                done();
            })
            .catch(error => done(error)); 
    });
});
