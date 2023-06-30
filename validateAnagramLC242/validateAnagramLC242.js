export function validateAnagram(s, t) {

    const a = s;
    const b = t;

    if ((a.length !== b.length) || (a === "" && b === "")) {
        return false;
    }

    const map = new Map();

    for (let i = 0; i < a.length; i++) {
        const value = a.charAt(i)
        if (!map.has(value)) {
            map.set(value, 1);
        } else {
            map.set(value, map.get(value) + 1);
        }
    }

    for (let j = 0; j < b.length; j++) {
        const value2 = b.charAt(j);
        if (map.has(value2)) {
            map.set(value2, map.get(value2) - 1);
        } else {
            return false;
        }
    }

    for (const value of map.values()) {
        if (value !== 0) {
            return false;
        }
    }
    return true;
}

