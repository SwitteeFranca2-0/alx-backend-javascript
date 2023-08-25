assert = require('assert')
calculateNumber = require('./1-calcul.js')

describe('Handle two values based on the given type', () => {
    it('should return the sum of two float numbers given', () => {
        const result = calculateNumber('SUM', 1.2, 3.7)
        assert.strictEqual(result, 5)
    })
    it('should return the sum of a float and an integer number given', () =>{
        const result = calculateNumber('SUM', 1.2, 5)
        assert.strictEqual(result, 6)
    })
    it('should return the correct sum of two integers', () => {
        const result = calculateNumber('SUM', 1, 3.7)
        assert.strictEqual(result, 5)
    })
    it('should return the correct sum of a floatng number and zero', () =>{
        const result  = calculateNumber('SUM', 0.7, 0);
        assert.strictEqual(result, 1)
    })
    it('should return the correct sum of two floating numbers', () =>{
        const result = calculateNumber('SUM', -0.7, -0.2);
        assert.strictEqual(result, -1)
    })
    it('should return the correct division of two float numbers given', () => {
        const result = calculateNumber('DIVIDE', 1.2, 3.7)
        assert.strictEqual(result, 0.25)
    })
    it('should return the correct division of a float and an integer number given', () =>{
        const result = calculateNumber('DIVIDE', 1.2, 5)
        assert.strictEqual(result, 0.2)
    })
    it('should return the correct division of two integers', () => {
        const result = calculateNumber('DIVIDE', 1, 3.7)
        assert.strictEqual(result, 0.25)
    })
    it('should return the correct division of a floatng number and zero', () =>{
        const result  = calculateNumber('DIVIDE', 0.7, 0);
        assert.strictEqual(result, 'Error')
    })
    it('should return the correct division of two floating numbers', () =>{
        const result = calculateNumber('DIVIDE', -0.7, -0.2);
        assert.strictEqual(result, 'Error')
    })
    it('should return the difference of two float numbers given', () => {
        const result = calculateNumber('SUBTRACT', 1.2, 3.7)
        assert.strictEqual(result, -3)
    })
    it('should return the difference of a float and an integer number given', () =>{
        const result = calculateNumber('SUBTRACT', 1.2, 5)
        assert.strictEqual(result, -4)
    })
    it('should return the correct difference of two integers', () => {
        const result = calculateNumber('SUBTRACT', 1, 3.7)
        assert.strictEqual(result, -3)
    })
    it('should return the correct difference of a floatng number and zero', () =>{
        const result  = calculateNumber('SUBTRACT', 0.7, 0);
        assert.strictEqual(result, 1)
    })
    it('should return the correct difference of two floating numbers', () =>{
        const result = calculateNumber('SUBTRACT', -0.7, -0.2);
        assert.strictEqual(result, -1)
    })
})
