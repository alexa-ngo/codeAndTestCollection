// Decimal to Hexadecimal converter

function decimalToHex(num, sourceBase) {

    let result = "";
    let quotient = num;

    while (quotient !== 0) {
        const remainder = quotient % sourceBase;
        quotient = Math.trunc(quotient / sourceBase);

        if (remainder < 10) {
            result = remainder + result;
        } else {
            if (remainder === 10) {
                result = "A" + result;
            }
            if (remainder === 11) {
                result = "B" + result;
            }
            if (remainder === 12) {
                result = "C" + result;
            }
            if (remainder === 13) {
                result = "D" + result;
            }
            if (remainder === 14) {
                result = "E" + result;
            }
            if (remainder === 15) {
                result = "F" + result;
            }
        }
    }
    return result;
}

//console.log(decimalToHex(922337203685477, 16)); 