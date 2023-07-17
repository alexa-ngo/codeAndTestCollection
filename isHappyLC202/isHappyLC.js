function isHappy(n) {

    let set = new Set();

    while (n !== 1) {
        let currNum = n
        let sum = 0;
        while (currNum !== 0) {
            sum += (currNum % 10) ** 2
            currNum = Math.trunc(currNum / 10);
        }

        if (set.has(sum)) {
            return false;
        }
        set.add(sum);
        n = sum;
    }
    return true;
}

// const n = 19
// console.log(isHappy(n))