import { removeDuplicates } from "./removeDuplicatesLC26";

it("[] returns 0", () => {
    const nums = []
    const result = removeDuplicates(nums);
    expect(result).toBe(0)
})

it("[1,2] returns 2", () => {
    const nums = [1, 2]
    const result = removeDuplicates(nums);
    expect(result).toBe(2)
})

it("[1,2,2,3,3,4] returns 4", () => {
    const nums = [1, 2, 2, 3, 3, 4]
    const result = removeDuplicates(nums);
    expect(result).toBe(4)
})

it("[0,0,1,1,1,2,2,3,3,4] returns 5", () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
    const result = removeDuplicates(nums);
    expect(result).toBe(5)
})




