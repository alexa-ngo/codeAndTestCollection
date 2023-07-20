import { twoSums as twoSums } from "./twoSumLC1";

it("Returns [0,1] with nums = [0,1,2,3,4,5] where target = 1", () => {
    const nums = [0, 1, 2, 3, 4, 5]
    const target = 3
    const results = twoSums(nums, target)
    expect(results).toEqual([0, 3])

})

it("Returns [1,2] with nums = [1,3,4] where target = 5", () => {
    const nums = [1, 3, 4]
    const target = 5
    const results = twoSums(nums, target)
    expect(results).toEqual([0, 2])

})

it("Returns [0,5] with nums = [2,12,312,2,4,8] where target = 10", () => {
    const nums = [2, 12, 312, 2, 4, 8]
    const target = 10
    const results = twoSums(nums, target)
    expect(results).toEqual([0, 5])
})

it("Returns [3,4] with nums = [1,3,5,7,4,2,43] where target = 11", () => {
    const nums = [1, 3, 5, 7, 4, 2, 43]
    const target = 11
    const results = twoSums(nums, target)
    expect(results).toEqual([3, 4])
})

it("Returns [6,7] with nums = [3,4,56,34,45,3,42] where target = 45", () => {
    const nums = [1, 4, 56, 34, 45, 2, 42, 3]
    const target = 45
    const results = twoSums(nums, target)
    expect(results).toEqual([6, 7])
})

it("Returns [3,7] with nums = [20,4,3,-43,6,7,14,-6,5,55] where target = -49", () => {
    const nums = [20, 4, 3, -43, 6, 7, 14, -6, 5, 55]
    const target = -49
    const results = twoSums(nums, target)
    expect(results).toEqual([3, 7])
})

it("Returns [0,10] with nums = [20,4,3,-43,6,7,14,-6,5,-55] where target = -33", () => {
    const nums = [20, 4, 3, -43, 6, 7, 14, -6, 5, -55]
    const target = -35
    const results = twoSums(nums, target)
    expect(results).toEqual([0, 9])
})

it("Returns [] with nums = [-2,3,-23,232,32,1,23,2] where target = -88", () => {
    const nums = [-2, 3, -23, 232, 32, 1, 23, 2]
    const target = -88
    const results = twoSums(nums, target)
    expect(results).toEqual([])
})


