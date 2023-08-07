function reverseVowels(s) {

    const set = new Set(['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'])
    const stack = []
    let result = ""

    for (let i = 0; i < s.length; i++) {
        if (set.has(s.charAt(i))) {
            stack.push(s.charAt(i))
        }
    }
    console.log(stack)
    // for (let j = 0; j < s.length; j++) {
    //     if (set.has(s.charAt(j))) {
    //         result += stack.pop()
    //     } else {
    //         result += s.charAt(j)
    //     }
    // }
    // return result
}

const s = "leetcode"
console.log(reverseVowels(s))


// result = "l"

// s = "leecode"

// s.charAt(1) = l