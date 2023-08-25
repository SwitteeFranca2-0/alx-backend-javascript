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
    describe('GET /available_payments', () => {
        it('should return available payment methods', (done) => {
            request.get('http://localhost:7865/available_payments', (error, response, body) => {
                const expectedResponse = {
                    payment_methods: {
                        credit_cards: true,
                        paypal: false
                    }
                };
                expect(response.statusCode).to.equal(200);
                expect(JSON.parse(body)).to.deep.equal(expectedResponse);
                done();
            });
        });
    });
    describe('POST /login', () => {
        it('should return a welcome message for valid user', (done) => {
            const userName = 'Alice';
            request.post('http://localhost:7865/login', { json: { userName } }, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                expect(body).to.equal(`Welcome ${userName}`);
                done();
            });
        });
    });
});