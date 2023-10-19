// Decimal to Binary Converter

function decimalToBinary(userInput) {

    let quotient = userInput; // initializes as the userInput
    let result = "";
    let spacedResult = "";

    while (quotient !== 0) {
        const remainder = quotient % 2;
        quotient = Math.trunc(quotient / 2);
        result = remainder + result;
    }

    while (result.length % 4 !== 0) {
        result = '0' + result;
    }

    for (let i = 0; i < result.length; i++) {
        if (i % 4 === 0) {
            spacedResult += " ";
        }
        spacedResult += result.charAt(i);
    }
    return spacedResult.substring(1, spacedResult.length);
}

//console.log(decimalToBinary(1114)); // Expected: 0100 0101 1010
//console.log(decimalToBinary(92013912)); // Expected: 101011111000000010101011000
//console.log(decimalToBinary(312312311)); // Expected: 10010100111011000000111110111
//console.log(decimalToBinary(231231)); // Expected: 111000011100111111
//console.log(decimalToBinary(24)); // Expected: 0001 1000
//console.log(decimalToBinary(1032)); // Expected: 10000001000


// Binary to Decimal Converter

function binaryToDecimal(userInput) {

    const binary = userInput;   // initializes as the userInput
    let digitCounter = -1;      // starts from the right side of the userInput string
    let result = 0;

    for (let i = binary.length; i >= 1; i--) {
        const valueOfBinary = binary.charAt(i - 1);
        digitCounter++;
        result += valueOfBinary * 2 ** digitCounter;
    }
    return result;
}

//console.log(binaryToDecimal("10111010111"));    // Expected: 1495
//console.log(binaryToDecimal("10110"));    // Expected: 22
//console.log(binaryToDecimal("1001011"));    // Expected: 75
//console.log(binaryToDecimal("101001"));    // Expected: 41
//console.log(binaryToDecimal("111"));    // Expected: 41
//console.log((binaryToDecimal("100101011"))); // Expected: 299
//console.log(binaryToDecimal("101101")); // Expected: 45


function addBinary(a, b) {
    return (parseInt(a, 2) + parseInt(b, 2)).toString(2);
}


function twoComplementDecToBinary(userInput) {

    const input = userInput;
    let decimalVal = "";
    let invertBits = "";
    let result = "";

    // check first character for sign
    if (input.charAt(0) === "-") {
        signBitFlag = 1;
    };

    // get decimalVal
    for (let i = 0; i < input.length; i++) {
        if (input.charAt(i) !== "-") {
            decimalVal += input.charAt(i);
        }
    };

    // convert the decimalVal to binary
    const binaryResult = decimalToBinary(decimalVal);

    // invert the bits
    for (let j = 0; j < binaryResult.length; j++) {
        if (binaryResult.charAt(j) === "1") {
            invertBits += 0;
        } else if (binaryResult.charAt(j) === " ") {
            invertBits += " ";
        } else {
            invertBits += 1;
        }
    };

    // add 1 to the result
    const noSpace = invertBits.replace(" ", "");

    result = addBinary(noSpace, "0001");
    return result;
};

//console.log(twoComplementDecToBinary("-126"));
//console.log(twoComplementDecToBinary("-54"));  // Expected: 11001010
//console.log(twoComplementDecToBinary("91"));    // Expected: 10100101
//console.log(twoComplementDecToBinary("111")); // Expected: 10010001
//console.log(twoComplementDecToBinary("-94"));   // Expected: 10100010
//console.log(twoComplementDecToBinary("-32"));   // Expected: 11100000
//console.log(twoComplementDecToBinary("126")); // Expected: 10000010



function twoComplementBinaryToDec(userInput) {

    const binaryResult = userInput;
    let invertBits = "";

    // Invert all bits
    for (let j = 0; j < binaryResult.length; j++) {
        if (binaryResult.charAt(j) === "1") {
            invertBits += 0;
        } else if (binaryResult.charAt(j) === " ") {
            invertBits += " ";
        } else {
            invertBits += 1;
        }
    };

    // Add 1 to the result
    const noSpace = invertBits.replace(" ", "");
    const afterAddingOne = addBinary(noSpace, "0001");

    // Convert to Decimal
    let resultOfBinaryToDecimal = binaryToDecimal(afterAddingOne);

    // Add negative sign (The original MSB was 1)
    if (binaryResult.charAt(0) === "1") {
        resultOfBinaryToDecimal = "-" + resultOfBinaryToDecimal;
    }
    return resultOfBinaryToDecimal;
};

console.log(twoComplementBinaryToDec("10010001"));

