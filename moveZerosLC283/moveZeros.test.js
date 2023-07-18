import { moveZeros } from "./moveZeros";

it('[] returns []', () => {
    const n = [];
    const result = moveZeros(n);
    expect(result).toEqual([])
})

it('[0] returns [0]', () => {
    const n = [0];
    const result = moveZeros(n);
    expect(result).toEqual([0])
})

it('[0,1,0,3,12] returns [1,3,12,0,0]', () => {
    const n = [0, 1, 0, 3, 12];
    const result = moveZeros(n);
    expect(result).toEqual([1, 3, 12, 0, 0])
})

it('[0,0,1,2,0,0,3,4,5] returns [1,2,3,4,5,0,0,0,0]', () => {
    const n = [0, 0, 1, 2, 0, 0, 3, 4, 5];
    const result = moveZeros(n);
    expect(result).toEqual([1, 2, 3, 4, 5, 0, 0, 0, 0])
})

it('[11, 0, 4, 0, 54, 342, 423, 44, 343, 0, 0, 34] returns [11, 4, 54, 342, 423, 44, 343, 34, 0, 0, 0,0]', () => {
    const n = [11, 0, 4, 0, 54, 342, 423, 44, 343, 0, 0, 34];
    const result = moveZeros(n);
    expect(result).toEqual([11, 4, 54, 342, 423, 44, 343, 34, 0, 0, 0, 0])
})

it('[0,-3, -2,4,1,23,0,12,32,2, 0] returns [-3,-2,4,1,23,12,32,2,0,0,0]', () => {
    const n = [0, -3, -2, 4, 1, 23, 0, 12, 32, 2, 0];
    const result = moveZeros(n);
    expect(result).toEqual([-3, -2, 4, 1, 23, 12, 32, 2, 0, 0, 0])
})

it('[0,-200,-23212321, 0, 231232, 3213232,0,767687,989898797,32032132,1,0] returns [-200,-23212321, 231232, 3213232, 767687, 989898797,32032132, 1, 0,0,0 0] ', () => {
    const n = [0, -200, -23212321, 0, 231232, 3213232, 0, 767687, 989898797, 32032132, 1, 0];
    const result = moveZeros(n);
    expect(result).toEqual([-200, -23212321, 231232, 3213232, 767687, 989898797, 32032132, 1, 0, 0, 0, 0])
})
