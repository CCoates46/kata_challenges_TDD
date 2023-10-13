const christmasTree = require('./christmasTree')

describe('Christmas Tree size tests', () => {
     
    it('should ensure that the number of rows returned match the height passed in', () => {
        expect(christmasTree(2)).toHaveLength(2)
        expect(christmasTree(4)).toHaveLength(4)
        expect(christmasTree(10)).toHaveLength(10)
        expect(christmasTree(20)).toHaveLength(20)
    });
});
