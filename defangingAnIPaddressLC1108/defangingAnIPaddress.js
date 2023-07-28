export function defangingIPadd(address) {

    let result = '';

    for (let i = 0; i < address.length; i++) {
        if (address.charAt(i) !== ".") {
            result += address.charAt(i)
        } else {
            result += "[" + address.charAt(i) + "]"
        }
    }
    return result;
}

