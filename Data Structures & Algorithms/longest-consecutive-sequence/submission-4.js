class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let longest = 0;
        for (let num of nums) {
            if (numSet.has(num-1)) continue;//it is not the start of a sequence
            let maxLength = 1;
            while (numSet.has(num+maxLength)) {
                maxLength++;
            }
            longest = Math.max(longest, maxLength);
        }
        return longest;
    }
}
