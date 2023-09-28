function pangram(sentence) {

    const set = new Set(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']);

    for (let i = 0; i < sentence.length; i++) {
        if (set.has(sentence.charAt(i))) {
            set.delete(sentence.charAt(i));
        }
    }
    return set.size == 0;
}

//const sentence = "thequickbrownfoxjumpsoverthelazydog"
const sentence = "leetcode"  // return false
console.log(pangram(sentence))


