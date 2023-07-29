import { findAllDisappear } from "./findAllNumbersDisappearLC448";

it(' [1, 1] returns [5,6]', () => {
    const nums = [1, 1]
    const result = findAllDisappear(nums);
    expect(result).toEqual([2])
})

it(' [1, 2, 2] returns [3]', () => {
    const nums = [1, 2, 2]
    const result = findAllDisappear(nums);
    expect(result).toEqual([3])
})

it(' [1, 6, 6, 3, 5, 6] returns [2,4]', () => {
    const nums = [1, 6, 6, 3, 5, 6]
    const result = findAllDisappear(nums);
    expect(result).toEqual([2, 4])
})

it(' [1, 2, 3, 4, 4, 6] returns [5]', () => {
    const nums = [1, 2, 3, 4, 4, 6]
    const result = findAllDisappear(nums);
    expect(result).toEqual([5])
})
it(' [1, 1, 1, 1, 1, 1] returns [2,3,4,5,6]', () => {
    const nums = [1, 1, 1, 1, 1, 1]
    const result = findAllDisappear(nums);
    expect(result).toEqual([2, 3, 4, 5, 6])
})

it(' [4, 3, 2, 7, 8, 2, 3, 1] returns [5,6]', () => {
    const nums = [4, 3, 2, 7, 8, 2, 3, 1]
    const result = findAllDisappear(nums);
    expect(result).toEqual([5, 6])
})
