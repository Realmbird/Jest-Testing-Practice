const calculator = (() => {
    const add = (a,b) => a + b
    const sub = (a,b) => a - b
    const div = (a,b) => a / b
    const mult = (a,b) => a * b
    return {add, sub, div, mult}
})()
export {calculator}
