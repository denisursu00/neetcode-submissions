class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let sumMap = new Map();
        for (let i = 0;i < nums.length; i++) {
            sumMap.set(target-nums[i], i);
        }
        for (let i = 0;i < nums.length; i++) {
            let val = sumMap.get(nums[i]);
            if (val && val !== i) {
                return [i, val];
            }
        }
    }
}
