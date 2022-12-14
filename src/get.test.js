import get from "./get.js"

const object = { 'a': [{ 'b': { 'c': 3 } }] }



test("(get(object, 'a[0].b.c')).toBe(3)", () => {
    expect(get(object, 'a[0].b.c')).toBe(3)
    })

test("(get(object, ['a', '0', 'b', 'c'])).toBe(3)", () => {
    expect(get(object, ['a', '0', 'b', 'c'])).toBe(3)
    })

test("(get(object, 'a.b.c', 'default')).toBe('default')", () => {
    expect(get(object, 'a.b.c', 'default')).toBe('default')
    })

