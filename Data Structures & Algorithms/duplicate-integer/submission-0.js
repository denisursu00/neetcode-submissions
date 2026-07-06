class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let nonDuplicates = new Set()
        for (const num of nums) {
            if (nonDuplicates.has(num)) {
                return true
            }
            nonDuplicates.add(num)
        }
        return false
    }
}
