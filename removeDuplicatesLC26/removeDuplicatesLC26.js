export function removeDuplicates(nums) {

    if (nums.length === 0) {
        return 0
    }

    let left = 0;
    let right = 1;
    while (right < nums.length) {
        if (nums[left] !== nums[right]) {
            left++;
            nums[left] = nums[right];
        }
        right++;
    }
    return left + 1;
};