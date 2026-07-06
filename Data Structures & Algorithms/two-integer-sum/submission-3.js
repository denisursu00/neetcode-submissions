class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let indices = new Map()
        for (let i = 0; i < nums.length; i++) {
            indices.set(nums[i], i)
        }

        for (let i = 0; i < nums.length; i++) {
            let diff = target - nums[i]
            if (indices.get(diff) && indices.get(diff) !== i) {
                return [i, indices.get(diff)]
            }
        }

        return []
    }
}
