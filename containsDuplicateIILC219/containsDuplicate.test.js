import { containsNearbyDuplicate } from "./containsDuplicate";

it("const nums = [1, 2, 3, 1], const k = 2 returns true", () => {
    const nums = [1, 2, 3, 1]
    const k = 2
    const result = containsNearbyDuplicate(nums, k)
    expect(result).toBe(false)
})

it("const nums = [1, 2, 3, 4], const k = 3 returns false", () => {
    const nums = [1, 2, 3, 4]
    const k = 3
    const result = containsNearbyDuplicate(nums, k)
    expect(result).toBe(false)
})

it("const nums = [1, 0, 1, 1], const k = 1 returns true", () => {
    const nums = [1, 0, 1, 1]
    const k = 1
    const result = containsNearbyDuplicate(nums, k)
    expect(result).toBe(true)
})

it("const nums = [1, 2, 3, 1, 2, 3], const k = 2 returns false", () => {
    const nums = [1, 2, 3, 1, 2, 3]
    const k = 2
    const result = containsNearbyDuplicate(nums, k)
    expect(result).toBe(false)
})

it("const nums = [3, 4, 6, 3, 2, 5, 1], const k = 1 returns true", () => {
    const nums = [3, 4, 6, 3, 2, 5, 1]
    const k = 1
    const result = containsNearbyDuplicate(nums, k)
    expect(result).toBe(false)
})

it("const nums = [3, 4, 6, 3, 2, 5, 1], const k = 3 returns true", () => {
    const nums = [3, 4, 6, 3, 2, 5, 1]
    const k = 3
    const result = containsNearbyDuplicate(nums, k)
    expect(result).toBe(true)
})

