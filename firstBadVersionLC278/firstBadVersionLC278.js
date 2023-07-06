export function firstBadVersion(n) {
    let start = 1;
    let end = n;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (isBadVersion(mid)) {
            end = mid
        } else {
            if (start === mid) {
                return end;
            }
            start = mid
        }
    }
    return end;
};

export function isBadVersion(input) {
    if ((input === 3) || (input === 1) || (input === 27) || (input === 148)) {
        return true;
    } else {
        return false;
    }
};