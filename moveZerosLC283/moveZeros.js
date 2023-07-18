export function moveZeros(nums) {

    const n = nums;

    if (n.length <= 0) {
        return n;
    }

    let idx = 0;

    for (let i = 0; i < n.length; i++) {
        if (n[i] !== 0) {
            let temp = n[idx];
            n[idx] = n[i];
            n[i] = temp;
            idx++;
        }
    }
    return n;
}

