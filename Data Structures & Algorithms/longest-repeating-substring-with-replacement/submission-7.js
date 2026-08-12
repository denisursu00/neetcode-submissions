class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let countMap = new Map();
        let res = 0;
        let maxf = 0;
        let l = 0;
        for (let r = 0; r < s.length; r++) {
            countMap.set(s[r], (countMap.get(s[r]) || 0) + 1);
            maxf = Math.max(countMap.get(s[r]), maxf);
            while (r - l + 1 - maxf > k) {
                countMap.set(s[l], countMap.get(s[l]) - 1);
                l++;
            }
            res = Math.max(r-l+1, res);
        }
        return res;
    }
}
