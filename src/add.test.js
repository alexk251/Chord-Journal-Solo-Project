// add two intergers
// add decimals
// add negative
// add string
// One number?
// string of 'ten'

import sum from './add'

test(' Add 2 Integers',() => {
    expect(sum(1,2)).toBe(3);
})

test(' Add decimals', () => {
    expect(sum(1.1,1.2)).toBe(2.3);
})

test(' Add Negatives',() => {
    expect(sum(-1,-2)).toBe(-3);
})

test(' Add strings',() => {
    expect(sum('1','2')).toBe(3);
})

test('Add ONE number', () => {
    expect(sum(1)).toBe(1);
})

test(` Add string 'ten'`,() => {
    expect(sum('ten',2)).toBe(12);
})