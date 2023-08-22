const twelveDays = require('./twelveDays')

describe('Test suite for Twelve Days kata', () => {

    it('should check to see if type is string', () => {
        expect(typeof twelveDays(1)).toBe('string')
    });

    it('should return the gifts for 1st day when day is 1', () => {
        expect(twelveDays(1)).toContain('First')
        expect(twelveDays(1)).toContain('A Partridge in a Pear Tree')
    });

    it('should return gifts for 1st and 2nd day when day is 2', () => {
        expect(twelveDays(2)).toContain('Second')
        expect(twelveDays(2)).toContain('Two Turtle Doves')
        expect(twelveDays(2)).toContain('And a Partridge in a Pear Tree')
    });

    it('should return gifts for 1st, 2nd and 3rd day when day is 3', () => {
        expect(twelveDays(3)).toContain('Third')
        expect(twelveDays(3)).toContain('Three French Hens')
        expect(twelveDays(3)).toContain('Two Turtle Doves')
        expect(twelveDays(3)).toContain('And a Partridge in a Pear Tree')
    });

    it('should return gifts for 1st, 2nd, 3rd and 4th day when day is 4', () => {
        expect(twelveDays(4)).toContain('Fourth')
        expect(twelveDays(4)).toContain('Four Calling Birds')
        expect(twelveDays(4)).toContain('Three French Hens')
        expect(twelveDays(4)).toContain('Two Turtle Doves')
        expect(twelveDays(4)).toContain('And a Partridge in a Pear Tree')
    });

    it('should return gifts for all 5 days when day is 5', () => {
        expect(twelveDays(5)).toContain('Fifth')
        expect(twelveDays(5)).toContain('Five Golden Rings')
        expect(twelveDays(5)).toContain('Four Calling Birds')
        expect(twelveDays(5)).toContain('Three French Hens')
        expect(twelveDays(5)).toContain('Two Turtle Doves')
        expect(twelveDays(5)).toContain('And a Partridge in a Pear Tree')
        
    });

});
