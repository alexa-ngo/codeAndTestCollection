export function romanToInteger(t) {

    const s = t;

    let result = 0;

    if (s === "") {
        return "";
    }

    for (let i = 0; i < s.length; i++) {
        switch (s.charAt(i)) {
            case 'I':
                if ((s.charAt(i + 1) === 'V') || (s.charAt(i + 1) === 'X')) {
                    result--;
                } else {
                    result++;
                }
                break;
            case 'X':
                if ((s.charAt(i + 1) === 'L') || (s.charAt(i + 1) === 'C')) {
                    result -= 10;
                } else {
                    result += 10;
                }
                break;
            case 'C':
                if ((s.charAt(i + 1) === 'D') || (s.charAt(i + 1) === 'M')) {
                    result -= 100;
                } else {
                    result += 100;
                }
                break;
            case 'V':
                result += 5;
                break;
            case 'L':
                result += 50;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
            default:
                console.log('Oh, no! There is an error');
                break;
        }
    }
    return result;
}
