import { calculator } from "./calculator"

describe("calculator", () => {
    it("calculator adds", () => {
        expect(calculator.add(1,1)).toBe(2)
    })
    it("calculator subtracts", () => {
        expect(calculator.sub(1,1)).toBe(0)
    })
    it("calculator divides", () => {
        expect(calculator.div(4,4)).toBe(1)
    })
    it("calculator multiplies", () => {
        expect(calculator.mult(2,2)).toBe(4)
    })
})