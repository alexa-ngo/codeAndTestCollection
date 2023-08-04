export function singleRowKeyboard(keyboard, word) {

    const map = new Map()

    for (let i = 0; i < keyboard.length; i++) {
        map.set(keyboard.charAt(i), i)
    }

    let totalDiff = 0
    let currIndex = 0

    for (let w of word) {
        const idx = map.get(w)
        totalDiff += Math.abs(idx - currIndex)
        currIndex = idx
    }
    return totalDiff
};