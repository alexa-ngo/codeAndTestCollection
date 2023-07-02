export function armstrongNumber(num) {
    let quotient = num;
    let sum = 0;
    const digitArr = [];

    while (quotient !== 0) {
        const digit = quotient % 10;
        digitArr.unshift(digit);
        quotient = Math.trunc(quotient / 10);
    }

    for (let i = 0; i < digitArr.length; i++) {
        sum += (digitArr[i] ** digitArr.length);
    }
    return (sum === num);
};

