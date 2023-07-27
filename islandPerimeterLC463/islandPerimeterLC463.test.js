import { islandPer } from "./islandPerimeterLC463";


it('[[1]] returns 4', () => {
    const grid = [[1]]
    const result = islandPer(grid)
    expect(result).toEqual(4)
});

it('[[1],[0]] returns 4', () => {
    const grid = [[1], [0]]
    const result = islandPer(grid)
    expect(result).toEqual(4)
});

it('[[1],[1],[1]] returns 8', () => {
    const grid = [[1], [1], [1]]
    const result = islandPer(grid)
    expect(result).toEqual(8)
});

it('[[1,0,0],[1,0,0],[1,1,1]] returns 12', () => {
    const grid = [[1, 0, 0], [1, 0, 0], [1, 1, 1]]
    const result = islandPer(grid)
    expect(result).toEqual(12)
});

it('[[0,1,0,0],[0,1,0,0],[0,1,0,0],[1,1,1,1]] returns 16', () => {
    const grid = [[0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [1, 1, 1, 1]]
    const result = islandPer(grid)
    expect(result).toEqual(16)
});

it('[[1,1,1,1],[0,1,0,0],[0,1,0,0],[0,1,0,0]] returns 16', () => {
    const grid = [[1, 1, 1, 1], [0, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0]]
    const result = islandPer(grid)
    expect(result).toEqual(16)
});

it('[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]] returns 16 ', () => {
    const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]];
    const result = islandPer(grid)
    expect(result).toEqual(16);
});

it('[[1,0,1,0],[1,0,1,0],[1,1,1,0],[0,1,0,0]] returns 18', () => {
    const grid = [[1, 0, 1, 0], [1, 0, 1, 0], [1, 1, 1, 0], [0, 1, 0, 0]]
    const result = islandPer(grid)
    expect(result).toEqual(18)
});

it('[[0,1,0,1],[0,1,0,1],[0,1,0,1],[0,1,1,1]] returns 20', () => {
    const grid = [[0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 0, 1], [0, 1, 1, 1]]
    const result = islandPer(grid)
    expect(result).toEqual(20)
});






