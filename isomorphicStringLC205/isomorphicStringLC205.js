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

// var findTheDifference = function(s, t) {
//     let s1 = s.split('').sort();
//     let t1 = t.split('').sort();
//     for(let i = 0;i<t1.length;i++)
//     {
//         if(t1[i]!==s1[i]){
//        return t1[i]}

//     }

// };var findTheDifference = function(s, t) {
//     for (let letter of s)
//         t = t.replace(letter, '');
//     return t;
// };


let findTheDifference = function (s, t) {
    let maps = new Map();
    let mapt = new Map();
    for (let i = 0; i < t.length; i++) {
        if (mapt.has(t.charAt(i))) {
            mapt.set(t.charAt(i), mapt.get(t.charAt(i)) + 1)

        }
        else {
            mapt.set(t.charAt(i), 1);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (maps.has(s.charAt(i))) {
            maps.set(s.charAt(i), maps.get(s.charAt(i)) + 1);

        }
        else {
            maps.set(s.charAt(i), 1);
        }
    }
    for (let [k, v] of mapt) {
        if (v !== maps.get(k)) {
            return k;
        }
    }
};