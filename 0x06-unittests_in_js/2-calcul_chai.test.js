const { expect } = require('chai')
calculateNumber = require('./1-calcul.js')

describe('Handle two values based on the given type', () => {
    describe('type == "SUM"', ()=>{
        it('should return the sum of two float numbers given', () => {
            const result = calculateNumber('SUM', 1.2, 3.7)
            expect(result).to.equal(5)
        })
        it('should return the sum of a float and an integer number given', () =>{
            const result = calculateNumber('SUM', 1.2, 5)
            expect(result).to.equal(6)
        })
        it('should return the correct sum of two integers', () => {
            const result = calculateNumber('SUM', 1, 3.7)
            expect(result).to.equal(5)
        })
        it('should return the correct sum of a floatng number and zero', () =>{
            const result  = calculateNumber('SUM', 0.7, 0);
            expect(result).to.equal(1)
        })
        it('should return the correct sum of two floating numbers', () =>{
            const result = calculateNumber('SUM', -0.7, -0.2);
            expect(result).to.equal(-1)
        })
        it('should return the correct sum of two an integer and floating number', () =>{
            const result = calculateNumber('SUM', 4, 0.7);
            expect(result).to.equal(5)
        })
    })
    describe('type == "DIVIDE"', () => {
        it('should return the correct division of two float numbers given', () => {
            const result = calculateNumber('DIVIDE', 1.2, 3.7)
            expect(result).to.equal(0.25)
        })
        it('should return the correct division of a float and an integer number given', () =>{
            const result = calculateNumber('DIVIDE', 1.2, 5)
            expect(result).to.equal(0.2)
        })
        it('should return the correct division of two integers', () => {
            const result = calculateNumber('DIVIDE', 1, 3.7)
            expect(result).to.equal(0.25)
        })
        it('should return the correct division of a floatng number and zero', () =>{
            const result  = calculateNumber('DIVIDE', 0.7, 0);
            expect(result).to.equal('Error')
        })
        it('should return the correct division of two floating numbers', () =>{
            const result = calculateNumber('DIVIDE', -0.7, -0.2);
            expect(result).to.equal('Error')
        })
        it('should return the correct division of two an integer and floating number', () =>{
            const result = calculateNumber('DIVIDE', 4, 0.7);
            expect(result).to.equal(4)
        })
    })
    describe('type == SUBTRACT', () => {
        it('should return the difference of two float numbers given', () => {
            const result = calculateNumber('SUBTRACT', 1.2, 3.7)
            expect(result).to.equal(-3)
        })
        it('should return the difference of a float and an integer number given', () =>{
            const result = calculateNumber('SUBTRACT', 1.2, 5)
            expect(result).to.equal(-4)
        })
        it('should return the correct difference of two integers', () => {
            const result = calculateNumber('SUBTRACT', 1, 3.7)
            expect(result).to.equal(-3)
        })
        it('should return the correct difference of a floatng number and zero', () =>{
            const result  = calculateNumber('SUBTRACT', 0.7, 0);
            expect(result).to.equal(1)
        })
        it('should return the correct difference of two floating numbers', () =>{
            const result = calculateNumber('SUBTRACT', -0.7, -0.2);
            expect(result).to.equal(-1)
        })
        it('should return the correct division of two an integer and floating number', () =>{
            const result = calculateNumber('SUBTRACT', 4, 0.7);
            expect(result).to.equal(3)
        })
    }) 
})
