class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let res = 0;
        let prefixSum = new Map();
        prefixSum.set(0, 1);
        let currentSum = 0;
        let diff = 0;
        for (let num of nums) {
            currentSum += num;
            diff = currentSum - k;
            res = res + (prefixSum.get(diff) || 0);
            prefixSum.set(currentSum, (prefixSum.get(currentSum) || 0) + 1);
        }
        return res;
    }
}
