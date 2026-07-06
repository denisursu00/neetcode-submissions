class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let numSet = new Set(nums)
        let maxLength = 0
        for (const num of numSet) {
            if (numSet.has(num-1)) continue//it means num is not the start of a sequence
            let currentSequenceLength = 1
            while (numSet.has(num+currentSequenceLength)) {
                currentSequenceLength++
            }
            maxLength = Math.max(maxLength, currentSequenceLength)
        }
        return maxLength
    }
}
