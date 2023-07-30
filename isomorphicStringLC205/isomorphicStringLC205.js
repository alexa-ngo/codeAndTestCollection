export function isoStr(s, t) {
    const mapS = new Map();
    const mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charOfS = s.charAt(i)
        const charOfT = t.charAt(i)

        if (mapS.get(charOfS) !== mapT.get(charOfT)) {
            return false;
        }
        mapS.set(charOfS, i)
        mapT.set(charOfT, i)
    }
    return true;
}