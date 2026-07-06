class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let start = 0
        let end = nums.length - 1
        while (start<=end) {
            let center = start + Math.floor((end - start)/2)
            if (nums[center]<target) {
                start = center + 1
            } else if (nums[center]>target) {
                end = center - 1
            } else {
                return center
            }
        }
        return -1
    }
}
