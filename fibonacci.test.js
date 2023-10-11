const fibonacciSequence = require('./fibonacci')

describe('Fibonacci test suite', () => {
    
    it('should return an array containing 0 if num is equal to 1', () => {
        const expectedResult = [0]
        expect(fibonacciSequence(1)).toEqual(expectedResult)
    });

    it('should return an array containing 0,1 if num is equal to 2', () => {
        const expectedResult = [0, 1]
        expect(fibonacciSequence(2)).toEqual(expectedResult)
    })

    it('should return an array with length matching number passed in', () => {
        expect(fibonacciSequence(2)).toHaveLength(2)
        expect(fibonacciSequence(13)).toHaveLength(13)
    });

    it('should check to see that the last digit is the sum of the 2 previous digits', () => {
        expect(fibonacciSequence(3)[2]).toEqual(1)
        expect(fibonacciSequence(5)[4]).toEqual(3)
        expect(fibonacciSequence(10)[9]).toEqual(34)
        expect(fibonacciSequence(15)[14]).toEqual(377)
    });


})
