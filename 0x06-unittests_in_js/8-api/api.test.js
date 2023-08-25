const request = require('request');
const {expect}= require('chai')
describe('API', () => {
    describe('GET /', () => {
        it('should have the correct status code', (done) => {
            request.get('http://localhost:7865', (error, response, body) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
        });

        it('should return the correct message', (done) => {
            request.get('http://localhost:7865', (error, response, body) => {
                    expect(body).to.equal('Welcome to the payment system');
                    done();
                });
        });
    });
});