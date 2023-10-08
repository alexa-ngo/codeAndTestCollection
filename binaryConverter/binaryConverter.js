// Decimal to Binary Converter

function decimalToBinary(userInput) {

    let result = "";
    let quotient = userInput;

    while (quotient !== 0) {
        const remainder = quotient % 2;
        quotient = Math.trunc(quotient / 2);
        result = remainder + result;
    }
    return result;
}

//console.log(decimalToBinary(77)); // Expected: 1001101
//console.log(decimalToBinary(92013912)); // Expected: 101011111000000010101011000
//console.log(decimalToBinary(312312311)); // Expected: 10010100111011000000111110111
//console.log(decimalToBinary(231231)); // Expected: 111000011100111111
//console.log(decimalToBinary(11)); // Expected: 1011
//console.log(decimalToBinary(1032)); // Expected: 10000001000


// Binary to Decimal Converter

function binaryToDecimal(userInput) {

    const binary = userInput;

    let result = 0;
    let value;

    for (let i = 0; i < binary.length; i++) {
        value = "0123456789abcdef".indexOf(binary.charAt(i));
        result = result * 2 + value;   // Multiply each digit of the binary number with its corresponding power of 2 and sum.
    }
    return result;
}

//console.log(binaryToDecimal("10111010111"));    // Expected: 1495
//console.log(binaryToDecimal("10110"));    // Expected: 22
//console.log(binaryToDecimal("1110"));    // Expected: 14
//console.log(binaryToDecimal("101001"));    // Expected: 41
//console.log(binaryToDecimal("111"));    // Expected: 7