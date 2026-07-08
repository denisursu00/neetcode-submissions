class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let productNonZero = 1;
        let zeroCount = 0;
        for (let num of nums) {
            if (num === 0) {
                zeroCount++;
                continue;
            }
            productNonZero *= num;
        }
        if (zeroCount > 1) {
            return new Array(nums.length).fill(0);
        }
        let res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (zeroCount > 0) {
                res[i] = nums[i] === 0 ? productNonZero : 0;
            } else {
                res[i] = productNonZero/nums[i];
            }
        }
        return res;
    }
}
