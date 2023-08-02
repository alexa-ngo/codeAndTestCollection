export function permutePalindrome(s) {
    let oddOccur = "";
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!map.has(s.charAt(i))) {
            map.set(s.charAt(i), 1)
        } else {
            map.set(s.charAt(i), (map.get(s.charAt(i)) + 1))
        }
    }

    for (let [key, value] of map) {
        if ((value % 2 !== 0) && oddOccur !== "") {
            return false;
        }
        if (value % 2 !== 0 && oddOccur === "") {
            oddOccur = key;
        }
    }
    return true;
}


const s = "code"
console.log(permutePalindrome(s))