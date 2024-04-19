const reverseString = require('./reverseString')

describe('reverseString', () => {
    it("returns string", () => {
        let input = "aba"
        let output = "aba"
        expect(reverseString(input)).toEqual(output)
    })
    it("reverses string", () => {
        let input = "bird"
        let output = "drib"
        expect(reverseString(input)).toEqual(output)
    })
})