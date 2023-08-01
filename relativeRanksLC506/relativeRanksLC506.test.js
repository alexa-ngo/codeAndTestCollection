import { findRelativeRanks } from "./relativeRanksLC506"

it('[5, 4, 3, 2, 1] returns ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]', () => {
    const score = [5, 4, 3, 2, 1]
    const result = findRelativeRanks(score);
    expect(result).toEqual(["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"])
})

it('[1, 2, 3, 4] returns ["4", "Bronze Medal", "Silver Medal", "Gold Medal"]', () => {
    const score = [1, 2, 3, 4]
    const result = findRelativeRanks(score);
    expect(result).toEqual(["4", "Bronze Medal", "Silver Medal", "Gold Medal"])
})

it('[10, 3, 8, 9, 4] returns ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]', () => {
    const score = [10, 3, 8, 9, 4]
    const result = findRelativeRanks(score);
    expect(result).toEqual(["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"])
})

it('[1, 4, 6, 7, 8, 9, 2, 3, 5] returns ["9", "6", "4", "Bronze Medal", "Silver Medal", "Gold Medal", "8", "7", "5"]', () => {
    const score = [1, 4, 6, 7, 8, 9, 2, 3, 5]
    const result = findRelativeRanks(score);
    expect(result).toEqual(["9", "6", "4", "Bronze Medal", "Silver Medal", "Gold Medal", "8", "7", "5"])
})

it('[4, 1, 2, 3, 6, 8, 5, 9, 10] returns ["6", "9", "8", "7", "4", "Bronze Medal", "5", "Silver Medal", "Gold Medal"]', () => {
    const score = [4, 1, 2, 3, 6, 8, 5, 9, 10]
    const result = findRelativeRanks(score);
    expect(result).toEqual(["6", "9", "8", "7", "4", "Bronze Medal", "5", "Silver Medal", "Gold Medal"])
})

it('[4, 5, 7, 3, 2, 1, 8, 11, 10, 9, 6] returns ["8", "7", "5", "9", "10", "11", "4", "Gold Medal", "Silver Medal", "Bronze Medal", "6"]', () => {
    const score = [4, 5, 7, 3, 2, 1, 8, 11, 10, 9, 6]
    const result = findRelativeRanks(score);
    expect(result).toEqual(["8", "7", "5", "9", "10", "11", "4", "Gold Medal", "Silver Medal", "Bronze Medal", "6"])
})
