export function perfectNum(num) {

    let result = 0;

    for (let i = 0; i <= num - 1; i++) {
        if (num % i === 0) {
            result += i
        }
    }
    return result === num;
}

