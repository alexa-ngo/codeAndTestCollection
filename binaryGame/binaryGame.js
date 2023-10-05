// This is a Binary Conversion Game

// Convert Hexadecimal to Binary or Binary to Hexadecimal

function binaryGame(typeOfGame, input) {  // either enter "binaryToHex" or "hexToBinary" and your user input respectively.
    if (typeOfGame === "binaryToHex") {
        return binaryToHex(input);
    } else {
        return hexToBinary(input);
    }
}

function hexToBinary(data) {

    const preInput = data.toUpperCase();
    const input = preInput.replaceAll(" ", "");

    let result = "";

    const map = new Map([
        ["0", "0000"],
        ["1", "0001"],
        ["2", "0010"],
        ["3", "0011"],
        ["4", "0100"],
        ["5", "0101"],
        ["6", "0110"],
        ["7", "0111"],
        ["8", "1000"],
        ["9", "1001"],
        ["A", "1010"],
        ["B", "1011"],
        ["C", "1100"],
        ["D", "1101"],
        ["E", "1110"],
        ["F", "1111"]
    ]);

    for (let char of input) {
        for (let _ of map) {
            const currBinary = map.get(char);
            result += currBinary + " ";
            break;
        }
    }
    console.log(result);
}


function binaryToHex(data) {
    console.log(data)

    const preInput = data;
    console.log('pre', preInput)
    const input = preInput.replaceAll(" ", "");
    console.log('input', input)

    let splitString = [];
    let result = "";

    for (let i = 0; i < data.length; i = i + 4) {
        splitString.push(input.slice(i, i + 4));
    };

    const map = new Map([
        ["0", "0000"],
        ["1", "0001"],
        ["2", "0010"],
        ["3", "0011"],
        ["4", "0100"],
        ["5", "0101"],
        ["6", "0110"],
        ["7", "0111"],
        ["8", "1000"],
        ["9", "1001"],
        ["A", "1010"],
        ["B", "1011"],
        ["C", "1100"],
        ["D", "1101"],
        ["E", "1110"],
        ["F", "1111"]
    ]);

    for (let chunk of splitString) {
        for (let [key, value] of map.entries()) {
            if (value === chunk) {
                result += key;
            }
        }
    }
    console.log('the result', result);
}


const z = binaryGame("binaryToHex", "0011 1011 1001 1010 1100 1010"); //either enter "binaryToHex" or "hexToBinary"
