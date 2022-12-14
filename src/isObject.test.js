import isObject from "./isObject.js"

test("(isObject({})).toBe(true)", () => {
    expect(isObject({})).toBe(true)
    })

test("(isObject(Function)).toBe(true)", () => {
    expect(isObject(Function)).toBe(true)
    })

test("(isObject([1, 2 ,3])).toBe(true)", () => {
    expect(isObject([1, 2 ,3])).toBe(true)
    })

test("(isObject(null)).toBe(false)", () => {
    expect(isObject(null)).toBe(false)
    })