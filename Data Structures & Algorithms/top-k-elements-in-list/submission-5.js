class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let countMap = new Map();
        for (let num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }
        let buckets = Array.from({length: nums.length + 1}, () => []);
        for (let [key, value] of countMap) {
            buckets[value].push(key);
        }
        let res = [];
        for (let i = buckets.length - 1; i >= 0; i--) {
            for (let num of buckets[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }
    }
}
