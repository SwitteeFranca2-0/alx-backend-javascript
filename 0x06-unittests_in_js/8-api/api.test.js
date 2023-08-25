onst request = require('supertest');
const app = require('./api'); // Assuming api.js is in the same directory

describe('API', () => {
    describe('GET /', () => {
        it('should have the correct status code', (done) => {
            request(app)
                .get('/')
                .expect(200, done);
        });

        it('should return the correct message', (done) => {
            request(app)
                .get('/')
                .expect('Welcome to the payment system', done);
        });
    });
});