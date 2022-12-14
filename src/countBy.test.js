import countBy from "./countBy.js"

 const users = [
   { 'user': 'barney', 'active': true },
   { 'user': 'betty', 'active': true },
   { 'user': 'fred', 'active': false }
 ]

 test("(countBy(users, value => value.active)).toBe({ 'true': 2, 'false': 1 })", () => {
    expect(countBy(users, value => value.active)).toBe({ 'true': 2, 'false': 1 })
    })
