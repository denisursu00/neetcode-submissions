class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate2(nums) {
        let nonDuplicates = new Set()
        for (const num of nums) {
            if (nonDuplicates.has(num)) {
                return true
            }
            nonDuplicates.add(num)
        }
        return false
    }
    hasDuplicate(nums) {
        let nonDup = new Set(nums);
        if (nonDup.size < nums.length) return true; 
        return false;
    }
}
