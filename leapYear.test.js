const leapYear = require('./leapYear')

describe('Test suite for leap year kata', () => {
    
    it('should check to see if type is Boolean', () => {
        expect(typeof leapYear(1)).toBe('boolean')
    });
    it('should return true if year is divisble by 4', () => {
        expect(leapYear(4)).toBe(true)
        expect(leapYear(1600)).toBe(true)
    });
    it('should return false if year is not divisible by 4', () => {
        expect(leapYear(1995)).toBe(false)
        expect(leapYear(1997)).toBe(false)
    });
    it('should return true if year is divisble by 4 and 400', () => {
        expect(leapYear(1804)).toBe(true)
        expect(leapYear(1936)).toBe(true)
    });
    it('should return false if year is not divisible by 4 and 400', () => {
        expect(leapYear(1900)).toBe(false)
        expect(leapYear(1601)).toBe(false)
    });
    it('should return false if year is divisible by 100 but not 400', () => {
        expect(leapYear(1900)).toBe(false)
        expect(leapYear(1994)).toBe(false)
        
    });
    it('should return false if year is divisible by 4 and 100 but not 400', () => {
        expect(leapYear(1800)).toBe(false)
        expect(leapYear(1900)).toBe(false)
    });
    
});
