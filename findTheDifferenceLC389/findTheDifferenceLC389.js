export function findDiff(s, t) {

    const map = new Map();

    for (let i = 0; i < t.length; i++) {
        if (map.has(t.charAt(i))) {
            map.set(t.charAt(i), map.get(t.charAt(i)) + 1)
        } else {
            map.set(t.charAt(i), 1)
        }
    }

    for (let j = 0; j < s.length; j++) {
        for (let [key, value] of map) {
            if (key === s.charAt(j)) {
                map.set(key, map.get(s.charAt(j)) - 1)
            }
        }
    }

    for (let [k, v] of map) {
        if (v === 1) {
            return k;
        }
    }
};

// const s = ""
// const t = "y"
// const result = findDiff(s, t)
// console.log(result)


