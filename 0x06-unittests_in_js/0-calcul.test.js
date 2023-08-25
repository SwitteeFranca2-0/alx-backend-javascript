var assert = require('assert');

const calculateNumber = require("./0-calcul.js");

describe('calculate_number_Function', () => {
    it('should return the sum of two float numbers given', () => {
        const result = calculateNumber(1.2, 3.7)
        assert.strictEqual(result, 5)
    })
    it('should return the sum of a float and an integer number given', () =>{
        const result = calculateNumber(1.2, 5)
        assert.strictEqual(result, 6)
    })
    it('should return the correct sum of two integers', () => {
        const result = calculateNumber(1, 3.7)
        assert.strictEqual(result, 5)
    })
    it('should return the correct sum of a floatng number and zero', () =>{
        const result  = calculateNumber(0.7, 0);
        assert.strictEqual(result, 1)
    })
    it('should return the correct sum of two floating numbers', () =>{
        const result = calculateNumber(-0.7, -0.2);
        assert.strictEqual(result, -1)
    })
    it('should return the correct sum of an integer and a float number', () =>{
        const result = calculateNumber(4, 0.9);
        assert.strictEqual(result, 5)
    })
})

