export function validatePerfectSquare(num) {
    if ((num === 0) || (num === 1)) {
        return true;
    }

    const maxNum = num;

    for (let i = 0; i <= maxNum; i++) {
        const workingSquare = i * i;
        if (workingSquare === num) {
            return true;
        }

        if (workingSquare > num) {
            return false;
        }
    }
};
