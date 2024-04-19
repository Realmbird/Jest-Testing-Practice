import { analyzeArray } from "./analyzeArray";

describe("analyzeArray", () => {
    it("works with example", () => {
        // const object = analyzeArray([1,8,3,4,2,6]);

        // object == {
        // average: 4,
        // min: 1,
        // max: 8,
        // length: 6
        // };
        let input = [1,8,3,4,2,6]
        let output = {
            average: 4,
            min: 1,
            max: 8,
            length: 6
        }
        expect(analyzeArray(input)).toEqual(output)
    })
})