export function singleNumber(num) {

    if (num.length === 1) {
        return num;
    }

    const arr = num.sort();

    for (let i = 0; i < arr.length; i += 2) {
        if ((arr[i] > 30000) || (arr[i]) < -30000) {
            return -9999999
        }
        else if (arr[i] !== arr[i + 1]) {
            return arr[i]
        }
    }
    return -9999999
}
