class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let product = 1;
        let countZero = 0;
        for (let num of nums) {
            if (num === 0) {
                countZero++;
                continue;
            }
            product *= num;
        }
        if (countZero > 1) {
            return new Array(nums.length).fill(0);
        }
        let res = new Array(nums.length);
        for (let i = 0; i < nums.length; i++) {
            if (countZero > 0) {
                res[i] = nums[i] === 0 ? product : 0;
            } else {
                res[i] = product/nums[i];
            }
        }
        return res;
    }
}
