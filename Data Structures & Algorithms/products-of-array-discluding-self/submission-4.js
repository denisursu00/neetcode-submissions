class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelfDivision(nums) {
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
    productExceptSelf(nums) {
        let res = new Array(nums.length).fill(1);
        let prefix = 1;
        for (let i = 0; i < nums.length; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }
        [1,1,2,8];
        let postfix = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            res[i] = res[i] * postfix;
            postfix *= nums[i];
        }
        return res;
    }
    
}
