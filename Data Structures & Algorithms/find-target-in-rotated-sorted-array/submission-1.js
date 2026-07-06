class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0
        let r = nums.length - 1
        let index = -1
        while (l <= r) {
            let c = l + Math.floor((r - l) / 2)
            if (target === nums[c]) {
                index = c
                break
            }
            if (nums[l] <= nums[c]) {
                if (target > nums[c] || target < nums[l]) {
                    l = c + 1
                } else {
                    r = c - 1
                }
            } else {
                if (target < nums[c] || target > nums[r]) {
                    r = c - 1
                } else {
                    l = c + 1
                }
            }
        }
        return index
    }
}
