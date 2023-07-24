export function longestCommonPrefix(strs) {
    if ((strs === undefined || strs.length === 0)) {
        return '';
    }
    if (strs.length === 1) {
        return strs[0];
    }

    let longestCommonPrefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < longestCommonPrefix.length) {
            longestCommonPrefix = strs[i];
        }
    }

    let result = '';

    for (let j = 0; j < strs.length; j++) {
        const currWord = strs[j];
        for (let k = 0; k < longestCommonPrefix.length; k++) {
            if (longestCommonPrefix[k] === currWord[k]) {
                result += longestCommonPrefix[k]
            } else {
                longestCommonPrefix = result;
            }
        }
        longestCommonPrefix = result;
        result = ''
    }
    return longestCommonPrefix;
}

