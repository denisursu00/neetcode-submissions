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
            let center = l + Math.floor((r - l)/2)
            if (nums[center]<target) {
                l = center + 1
            } else if (nums[center]>target) {
                r = center - 1
            } else {
                return center
            }
        }
        return -1
    }
}
