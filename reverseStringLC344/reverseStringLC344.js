function reversestring(s) {

    for (let i = 0, j = s.length - 1; i <= j; i++, j--) {

        temp = s[i]
        s[i] = s[j]
        s[j] = temp
    }
    return s
};


//     i        *        j
const s = ["h", "e", "l", "l", "o"]
console.log(reversestring(s))

