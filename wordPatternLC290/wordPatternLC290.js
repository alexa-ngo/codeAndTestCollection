export function wordPattern(pattern, words) {
    const map = new Map();
    const set = new Set();
    const wordsArr = words.split(" ");
    const patternArr = pattern.split("");

    if (wordsArr.length !== patternArr.length) {
        return false;
    }

    for (let i = 0; i < pattern.length; i++) {
        const currChar = pattern.charAt(i);
        if (!map.has(currChar) && !set.has(wordsArr[i])) {
            map.set(currChar, wordsArr[i]);
            set.add(wordsArr[i]);
        }
        else if (!map.has(currChar) && set.has(wordsArr[i])) {
            return false;
        }
        else if (map.has(currChar) && map.get(currChar) !== wordsArr[i]) {
            return false;
        }
    }
    return true;
}








// function wordPattern(pattern, words) {

//     const map = new Map();
//     const seenWords = new Set();
//     const wordsArr = words.split(" ");
//     const patternArr = pattern.split("");

//     if (wordsArr.length !== patternArr.length) {
//         return false;
//     }

//     for (let i = 0; i < pattern.length; i++) {
//         const currChar = pattern.charAt(i);
//         if (!map.has(currChar) && !seenWords.has(wordsArr[i])) {
//             map.set(currChar, wordsArr[i]);
//             seenWords.add(wordsArr[i]);
//         } else if (!map.has(currChar) && seenWords.has(wordsArr[i])) {
//             return false;
//         } else if (map.has(currChar) && map.get(currChar) !== wordsArr[i]) {
//             return false;
//         }
//     }
//     return true;
// }


// const pattern = "abba";
// const s = "dog cat cat dog";
// const result = wordPattern(pattern, s);
// console.log(result)


