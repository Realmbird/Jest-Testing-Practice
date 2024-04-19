import {caesarCipher as cipher} from './caesarCipher'

describe("Caesar Cipher", () => {  
    it("shifts by one", () => {
        let input = "abc"
        let output = "bcd"
        expect(cipher(input,1)).toEqual(output)
    })
    it("shifts by one", () => {
        let input = "abc"
        let output = "cde"
        expect(cipher(input,2)).toEqual(output)
    })
    it("wraps around", () => {
        let input = "z"
        let output = "a"
        expect(cipher(input,1)).toEqual(output)
    })
    it("keeps case", () => {
        let input = "ABC"
        let output = "BCD"
        expect(cipher(input,1)).toEqual(output)
    })
    it("punctuation", () => {
        let input = "ABC!"
        let output = "BCD!"
        expect(cipher(input,1)).toEqual(output)
    })
    it("sentence", () => {
        let input = "bird Ahh!"
        let output = "dktf Cjj!"
        expect(cipher(input,2)).toEqual(output)
    })
})