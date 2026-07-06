class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let l = nums.length
        const output = new Array(l)
        let prod = 1
        let zeroes = 0
        for (let num of nums) {
            if (num===0) {
                zeroes++
            } else {
                prod *= num
            }
        }

        if (zeroes > 1) {
            return output.fill(0)
        }

        for (let i = 0; i < l; i++) {
            if (zeroes > 0) {
                output[i] = (nums[i] === 0) ? prod : 0
            } else {
                output[i] = prod/nums[i]
            }
        }
        return output

    }
}
