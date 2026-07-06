class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map()
        //build map with cound
        for (const num of nums) {
            map.set(num, (map.get(num) || 0) + 1)
        }
        let res = new Array()
        let freq = new Array(nums.length+1).fill([])
        for (let [key, count] of map) {
            freq[count] = [...freq[count], key]
        }
        for (let i = freq.length-1; i>0; i--) {
            for (const num of freq[i]) {
                res.push(num)
                if (res.length === k) {
                    return res
                }
            }
        }
    }
}
