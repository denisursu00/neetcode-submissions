class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1
        while (l<=r) {
            let c = l + Math.floor((r - l)/2)
            if (nums[c]<target) {
                l = c + 1
            } else if (nums[c]>target) {
                r = c - 1
            } else {
                return c
            }
        }
        return -1
    }
}
