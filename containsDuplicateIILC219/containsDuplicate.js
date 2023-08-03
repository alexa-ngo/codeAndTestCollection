export function containsNearbyDuplicate(nums, k) {
    for (let i = 0; i <= nums.length - 1; i++) {
        let j = nums.length - 1;
        while (i < j) {
            if (nums[i] == nums[j] && Math.abs(i - j) <= k) {
                return true;
            }
            j--;
        }
    }
    return false
};
