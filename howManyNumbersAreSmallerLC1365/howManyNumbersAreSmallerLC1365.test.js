import { howManyNums } from "./howManyNumbersAreSmallerLC1365";

it('Returns [4,0,1,1,3] when nums = [8,1,2,2,3]', () => {
    const nums = [8, 1, 2, 2, 3]
    const result = howManyNums(nums)
    expect(result).toEqual([4, 0, 1, 1, 3])
});

it('Returns [2,1,0,3] when nums = [6,5,4,8]', () => {
    const nums = [6, 5, 4, 8]
    const result = howManyNums(nums)
    expect(result).toEqual([2, 1, 0, 3])
});

it('Returns [0,0,0,0] when nums = [7,7,7,7]', () => {
    const nums = [7, 7, 7, 7]
    const result = howManyNums(nums)
    expect(result).toEqual([0, 0, 0, 0])
});

it('Returns [0,1,2,3,4,5] when nums = [1,2,3,4,5,6]', () => {
    const nums = [1, 2, 3, 4, 5, 6]
    const result = howManyNums(nums)
    expect(result).toEqual([0, 1, 2, 3, 4, 5])
});

it('Returns [3,0,2,1,3] when nums = [20,1,4,3,20]', () => {
    const nums = [20, 1, 4, 3, 20]
    const result = howManyNums(nums)
    expect(result).toEqual([3, 0, 2, 1, 3])
});


