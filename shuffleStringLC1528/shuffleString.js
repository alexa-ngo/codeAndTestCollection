export function shuffleString(s, indices) {
    let result = ""
    const map = new Map();

    for (let i = 0; i < indices.length; i++) {
        map.set(indices[i], s.charAt(i))
    }

    for (let j = 0; j < s.length; j++) {
        const curr = map.get(j)
        result += curr
    }
    return result
}