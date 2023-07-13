export function addDigit(num) {

    let quotient = num;
    let sum = 0;

    while (true) {

        while (quotient > 0) {

            sum += (quotient % 10)
            quotient = Math.trunc(quotient / 10)
        }

        if (sum < 10) {
            break;
        } else {
            quotient = sum
            sum = 0
        }
    }
    return sum;
}