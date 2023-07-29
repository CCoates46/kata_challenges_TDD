const fizzBuzz = require('./fizzBuzz')

describe('test suite for fizzBuzz kata', () => {
    
    it('should check to see if type is Number', () => {
        expect(typeof fizzBuzz(1)).toBe('number')
    });

    it('should check to see if it can return a number based off the input', () => {
        expect(fizzBuzz(1)).toBe(1)
        expect(fizzBuzz(2)).toBe(2)
    });

    it('should return Fizz if the input is divisible by 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz')
        expect(fizzBuzz(6)).toBe('Fizz')
    });

    it('should return Buzz if the input is divisible by 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz')
        expect(fizzBuzz(10)).toBe('Buzz')
    });

    it('should return FizzBuzz if the input is divisible by 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz')
        expect(fizzBuzz(30)).toBe('FizzBuzz')
    });
});
