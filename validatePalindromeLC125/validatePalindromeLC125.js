export function validatePalindrome(s) {
    const lowercaseS = s.toLowerCase();

    const validCharacterSet = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);

    let i = 0;
    let j = lowercaseS.length - 1;

    while (i <= j) {
        while (i < lowercaseS.length && !validCharacterSet.has(lowercaseS.charAt(i))) {
            i++;
        }

        while (j >= 0 && !validCharacterSet.has(lowercaseS.charAt(j))) {
            j--;
        }

        if (i > j) {
            return true;
        }

        if (lowercaseS.charAt(i) !== lowercaseS.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

