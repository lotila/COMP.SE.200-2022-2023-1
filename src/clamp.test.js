import clamp from "./clamp.js"

test("(clamp(10, -5, 5)).toBe(5)", () => {
    expect(clamp(10, -5, 5)).toBe(5)
    })

test("(clamp(-10, -5, 5)).toBe(-5)", () => {
    expect(clamp(-10, -5, 5)).toBe(-5)
    })