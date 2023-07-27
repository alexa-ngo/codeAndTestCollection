function lengthOfLastWord(s) {
    const str = s.trim().split(' ');
    return str[str.length - 1].length;
}

const s = " fly me to the      moon "
console.log(lengthOfLastWord(s))
