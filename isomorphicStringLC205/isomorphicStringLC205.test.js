import { isoStr } from "./isomorphicStringLC205"

it('s = "gate" and t = "fate" returns true', () => {
    const s = "egg"
    const t = "add"
    const result = isoStr(s, t)
    expect(result).toBe(true)
})

it('s = "bears" and t = "falls" returns false', () => {
    const s = "bears"
    const t = "falls"
    const result = isoStr(s, t)
    expect(result).toBe(false)
})

it('s = "paper" and t = "title" returns true', () => {
    const s = "paper"
    const t = "title"
    const result = isoStr(s, t)
    expect(result).toBe(true)
})

it('s = "hello" and t = "pills" returns true', () => {
    const s = "hello"
    const t = "pills"
    const result = isoStr(s, t)
    expect(result).toBe(true)
})

it('s = "orange" and t = "ooooo" returns false', () => {
    const s = "orange"
    const t = "ooooo"
    const result = isoStr(s, t)
    expect(result).toBe(false)
})


