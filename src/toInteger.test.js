import toInteger from "./toInteger.js"

test("(toInteger(3.2)).toBe(3)", () => {
    expect(toInteger(3.2)).toBe(3)
    })

test("(toInteger(Number.MIN_VALUE)).toBe(0)", () => {
    expect(toInteger(Number.MIN_VALUE)).toBe(0)
    })
    
test("(toInteger(Infinity)).toBe(1.7976931348623157e+308)", () => {
    expect(toInteger(Infinity)).toBe(1.7976931348623157e+308)
    })
        
test("(toInteger('3.2')).toBe(3)", () => {
    expect(toInteger('3.2')).toBe(3)
    })

test("(toInteger(0.1)).toBe(0)", () => {
    expect(toInteger(0.1)).toBe(0)
    })

test("(toInteger(-8)).toBe(-8)", () => {
    expect(toInteger(-8)).toBe(-8)
    })

test("(toInteger(-8.7)).toBe(-9)", () => {
    expect(toInteger(-8.7)).toBe(-9)
    })