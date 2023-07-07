export function firstIdx(haystack, needle) {

    let firstOccurIndex = -1;
    let hi = 0;

    if (needle === "") {
        return firstOccurIndex;
    }

    while (hi <= haystack.length - needle.length) {
        for (let i = hi; i < haystack.length; i++) {
            if (haystack.charAt(i) === needle.charAt(0)) {
                firstOccurIndex = i;
                hi = i + 1;
                break;
            } else {
                hi = i + 1;
                // Don't need to break here. We still want to still be in the loop.
            }
        }
        if (firstOccurIndex !== -1) {
            for (let ni = 0; ni < needle.length; ni++) {
                if (haystack.charAt(firstOccurIndex + ni) !== needle.charAt(ni)) {
                    firstOccurIndex = -1;
                    break;
                }
            }
        }
        if (firstOccurIndex !== -1) {
            return firstOccurIndex;
        }
    }
    return firstOccurIndex;
}