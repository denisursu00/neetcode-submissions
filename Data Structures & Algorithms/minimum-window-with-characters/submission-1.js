class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length) {
            return ""
        }

        let countT = new Map()
        let window = new Map()

        for (const char of t) {
            countT.set(char, (countT.get(char) || 0) + 1)
        }

        let have = 0
        let need = countT.size
        let res = [-1, -1]
        let resSize = Infinity

        let l = 0
        for (let r = 0; r < s.length; r++) {
            let char = s[r]
            window.set(char, (window.get(char) || 0) + 1)

            if (countT.get(char) && window.get(char) === countT.get(char)) {
                have++
            }

            while (have === need) {
                if ((r - l + 1) < resSize) {
                    resSize = r - l + 1
                    res = [l, r]
                }

                window.set(s[l], window.get(s[l]) - 1)
                if (countT.get(s[l]) && window.get(s[l]) < countT.get(s[l])) {
                    have--
                }
                l++
            }
        }
        return resSize === Infinity ? "" : s.slice(res[0], res[1] + 1)
    }
}
