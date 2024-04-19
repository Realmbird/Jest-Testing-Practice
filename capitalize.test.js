const capitalize = require('./capitalize')

describe('Capitalize', function() {
    it('should accept all capital value', () => {
        let input = "BIRD"
        expect(capitalize(input)).toEqual(input);
    });
    it('should change one lower', () => {
        let input = "bIRD"
        let output = "BIRD"
        expect(capitalize(input)).toEqual(output);
    })
    it('should change first lower', () => {
        let input = "bird"
        let output = "Bird"
        expect(capitalize(input)).toEqual(output);
    })
});