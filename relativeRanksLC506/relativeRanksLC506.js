export function findRelativeRanks(score) {

    const map = new Map();
    const result = [];

    for (let i = 0; i < score.length; i++) {
        map[score[i]] = i;
    }

    const arr = Object.keys(map).sort((a, b) => b - a);

    for (let i = 0; i < arr.length; i++) {

        if (i === 0) {
            result[map[arr[i]]] = "Gold Medal";
        } else if (i === 1) {
            result[map[arr[i]]] = "Silver Medal";
        } else if (i === 2) {
            result[map[arr[i]]] = "Bronze Medal";
        } else {
            result[map[arr[i]]] = '' + (i + 1);
        }
    }
    return result;
}





