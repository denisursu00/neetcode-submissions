class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) {
            return ""
        }
        let res = []
        let len = Infinity

        let countT = new Map()
        for (let c of t) {
            countT.set(c, (countT.get(c) || 0) + 1)
        }
        let window = new Map()
        let have = 0
        let need = countT.size
        let l = 0
        for (let r = 0; r < s.length; r++) {
            let char = s[r]
            window.set(char, (window.get(char) || 0) + 1)
            if (countT.get(char) && countT.get(char) === window.get(char)) {
                have++
            }

            while (have === need) {
                if ((r - l + 1) < len) {
                    res = [l, r]
                    len = r - l + 1
                }

                window.set(s[l], window.get(s[l]) - 1)
                if (countT.get(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                    have--
                }
                l++
            }
        }
        return len === Infinity ? "" : s.slice(res[0], res[1] + 1)
    }
}
