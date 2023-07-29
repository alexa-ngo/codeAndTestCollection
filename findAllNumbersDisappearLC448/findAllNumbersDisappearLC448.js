export function findAllDisappear(nums) {

    const set = new Set(nums);
    const result = [];

    for (let i = 1; i < nums.length + 1; i++) {
        if (!set.has(i)) {
            result.push(i);
        }
    }
    return result;
}