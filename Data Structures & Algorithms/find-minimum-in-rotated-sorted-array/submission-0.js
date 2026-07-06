class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0
        let r = nums.length - 1
        let res = Infinity
        while (l<=r) {
            if (nums[l] <= nums[r]) {
                res = Math.min(res, nums[l]);
                break;
            }
            let c = l + Math.floor((r - l) / 2)
            res = Math.min(res, nums[c])
            if (nums[l] <= nums[c]) {
                l = c + 1
            } else {
                r = c - 1
            }
        }
        return res
    }
}
