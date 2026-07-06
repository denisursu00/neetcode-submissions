class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }
        let mapS = new Map();
        let mapT = new Map();
        for (let c of s) {
            mapS.set(c,  mapS.has(c) ? mapS.get(c) + 1 : 0);
        }
        for (let c of t) {
            mapT.set(c,  mapT.has(c) ? mapT.get(c) + 1 : 0);
        }
        for (let key of mapS.keys()) {
            if (mapT.get(key) !== mapS.get(key)) {
                return false;
            }
        }
        return true;
    }
}
