import add from "./add.js"

test("add 1 and 2 ", () => {
    expect(add(1, 2)).toBe(3)
    })

test("add 0 and 0 ", () => {
    expect(add(0, 0)).toBe(0)
    })

test("add 99 and -10 ", () => {
    expect(add(99, -10)).toBe(89)
    })

test("add 0 and 1 ", () => {
    expect(add(0, 1)).toBe(1)
    })