export function jewelsAndStones(jewels, stones) {

    const set = new Set(jewels);

    let result = 0;

    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones.charAt(i))) {
            result += 1;
        }
    }
    return result;
}
