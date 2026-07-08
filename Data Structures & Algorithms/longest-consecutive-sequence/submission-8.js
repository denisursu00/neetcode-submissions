class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums);
        let maxLen = 0;
        for (let num of numSet) {
            if (numSet.has(num - 1)) continue;//not the beginning of a set
            let currLen = 1;
            while (numSet.has(num + currLen)) {
                currLen++;
            }
            maxLen = Math.max(currLen, maxLen);
        }
        return maxLen;
    }
}
