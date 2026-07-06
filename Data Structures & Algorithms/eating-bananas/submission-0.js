class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1
        let r = Math.max(...piles)
        let res = r
        while (l<=r) {
            let hours = 0
            let k = l + Math.floor((r-l)/2)
            for (let pile of piles) {
                hours += Math.ceil(pile/k)
            }
            if (hours <= h) {
                res = k
                r = k - 1
            } else {
                l = k + 1
            }
        }
        return res
    }
}
