const request = require('request');
const {expect}= require('chai')
describe('API', () => {
    describe('GET /', () => {
        it('should have the correct status code', (done) => {
            request.get('http://localhost:7865', (error, response) => {
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
    describe('GET /cart/:id', () => {
        it('should have the correct status code', (done) => {
            request.get('http://localhost:7865/cart/12', (error, response) => {
                    expect(response.statusCode).to.equal(200);
                    done();
                });
        });

        it('should return the correct status code', (done) => {
            request.get('http://localhost:7865/cart/hello', (error, response) => {
                    expect(response.statusCode).to.equal(404);
                    done();
                });
        });
        it('should have the correct body', (done) => {
            request.get('http://localhost:7865/cart/12', (error, response, body) => {
                    expect(body).to.equal('Payment methods for cart 12');
                    done();
                });
        });

        it('should return the correct body', (done) => {
            request.get('http://localhost:7865/cart/hello', (error, response, body) => {
                    expect(body).to.equal('');
                    done();
                });
        });
    });
});