export function keyboardRow(words) {
    const row1Arr = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const row2Arr = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const row3Arr = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
    let row1 = true;
    let row2 = true;
    let row3 = true;

    const result = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (!row1Arr.includes(words[i][j].toLowerCase())) {
                row1 = false;
                break;
            }
        }
        if (row1) {
            result.push(words[i]);
            continue;
        } else {
            row1 = true;
        }

        for (let j = 0; j < words[i].length; j++) {
            if (!row2Arr.includes(words[i][j].toLowerCase())) {
                row2 = false;
                break;
            }
        }
        if (row2) {
            result.push(words[i]);
        } else {
            row2 = true;
        }

        for (let j = 0; j < words[i].length; j++) {
            if (!row3Arr.includes(words[i][j].toLowerCase())) {
                row3 = false;
                break;
            }
        }
        if (row3) {
            result.push(words[i]);
        } else {
            row3 = true;
        }
    }
    return result;
}


